"use server";

import { revalidatePath } from "next/cache";
import { addDailyPost, removeDailyPost } from "@/lib/daily-posts";
import {
  clearAdminSessionCookie,
  createAdminSessionToken,
  isAdminAuthenticated,
  setAdminSessionCookie,
  verifyAdminPassword,
  getAdminPassword,
} from "@/lib/admin-auth";
import { deleteDailyImage, saveDailyImage } from "@/lib/save-daily-image";

export type ActionState = { error?: string; success?: string };

export async function loginAction(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  if (!getAdminPassword()) {
    return {
      error:
        "رمز ادمین تنظیم نشده. متغیر محیطی ADMIN_PASSWORD را در هاست یا .env.local قرار دهید.",
    };
  }
  const password = String(formData.get("password") ?? "");
  if (!verifyAdminPassword(password)) {
    return { error: "رمز ورود نادرست است." };
  }
  const token = createAdminSessionToken();
  if (!token) {
    return { error: "پیکربندی امنیتی ناقص است (ADMIN_SECRET یا ADMIN_PASSWORD)." };
  }
  await setAdminSessionCookie(token);
  return { success: "ورود موفق." };
}

export async function logoutAction(): Promise<void> {
  await clearAdminSessionCookie();
  revalidatePath("/admin");
}

export async function uploadDailyPostAction(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  if (!(await isAdminAuthenticated())) {
    return { error: "لطفاً دوباره وارد شوید." };
  }

  const file = formData.get("image");
  if (!(file instanceof File) || file.size === 0) {
    return { error: "یک تصویر انتخاب کنید." };
  }

  const caption = String(formData.get("caption") ?? "").trim().slice(0, 280);
  const saved = await saveDailyImage(file);
  if (!saved.ok) return { error: saved.error };

  await addDailyPost({
    id: crypto.randomUUID(),
    imageUrl: saved.imageUrl,
    caption,
    publishedAt: new Date().toISOString(),
  });

  revalidatePath("/");
  revalidatePath("/daily");
  revalidatePath("/admin");

  return { success: "تصویر روزانه منتشر شد." };
}

export async function deleteDailyPostFormAction(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  const id = String(formData.get("id") ?? "");
  return deleteDailyPostAction(id);
}

export async function deleteDailyPostAction(id: string): Promise<ActionState> {
  if (!(await isAdminAuthenticated())) {
    return { error: "لطفاً دوباره وارد شوید." };
  }
  const removed = await removeDailyPost(id);
  if (!removed) return { error: "پست پیدا نشد." };
  await deleteDailyImage(removed.imageUrl);
  revalidatePath("/");
  revalidatePath("/daily");
  revalidatePath("/admin");
  return { success: "حذف شد." };
}
