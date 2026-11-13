import { promises as fs } from "node:fs";
import path from "node:path";
import { cache } from "react";

export type DailyPost = {
  id: string;
  imageUrl: string;
  caption: string;
  publishedAt: string;
};

const dataPath = path.join(process.cwd(), "data", "daily-posts.json");

async function readPostsFile(): Promise<DailyPost[]> {
  try {
    const raw = await fs.readFile(dataPath, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isDailyPost);
  } catch {
    return [];
  }
}

function isDailyPost(value: unknown): value is DailyPost {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === "string" &&
    typeof v.imageUrl === "string" &&
    typeof v.caption === "string" &&
    typeof v.publishedAt === "string"
  );
}

export const getDailyPosts = cache(async (): Promise<DailyPost[]> => {
  const posts = await readPostsFile();
  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
});

export async function saveDailyPosts(posts: DailyPost[]): Promise<void> {
  await fs.mkdir(path.dirname(dataPath), { recursive: true });
  await fs.writeFile(dataPath, `${JSON.stringify(posts, null, 2)}\n`, "utf8");
}

export async function addDailyPost(post: DailyPost): Promise<void> {
  const posts = await readPostsFile();
  posts.unshift(post);
  await saveDailyPosts(posts);
}

export async function removeDailyPost(id: string): Promise<DailyPost | undefined> {
  const posts = await readPostsFile();
  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) return undefined;
  const [removed] = posts.splice(index, 1);
  await saveDailyPosts(posts);
  return removed;
}
