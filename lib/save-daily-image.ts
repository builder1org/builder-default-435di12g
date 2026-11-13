import { randomUUID } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import { put } from "@vercel/blob";

const MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

const extByMime: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};

export type SaveImageResult =
  | { ok: true; imageUrl: string }
  | { ok: false; error: string };

export async function saveDailyImage(file: File): Promise<SaveImageResult> {
  if (!ALLOWED.has(file.type)) {
    return { ok: false, error: "فقط فرمت JPG، PNG، WebP یا GIF مجاز است." };
  }
  if (file.size > MAX_BYTES) {
    return { ok: false, error: "حداکثر حجم فایل ۵ مگابایت است." };
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const ext = extByMime[file.type] ?? "jpg";
  const filename = `${Date.now()}-${randomUUID().slice(0, 8)}.${ext}`;

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const blob = await put(`daily/${filename}`, buffer, {
        access: "public",
        contentType: file.type,
      });
      return { ok: true, imageUrl: blob.url };
    } catch {
      return { ok: false, error: "ذخیره در فضای ابری ناموفق بود. توکن Blob را بررسی کنید." };
    }
  }

  const uploadsDir = path.join(process.cwd(), "public", "uploads", "daily");
  await fs.mkdir(uploadsDir, { recursive: true });
  const diskPath = path.join(uploadsDir, filename);
  await fs.writeFile(diskPath, buffer);
  return { ok: true, imageUrl: `/uploads/daily/${filename}` };
}

export async function deleteDailyImage(imageUrl: string): Promise<void> {
  if (imageUrl.startsWith("/uploads/daily/")) {
    const diskPath = path.join(process.cwd(), "public", imageUrl.replace(/^\//, ""));
    try {
      await fs.unlink(diskPath);
    } catch {
      // فایل قبلاً حذف شده
    }
  }
}
