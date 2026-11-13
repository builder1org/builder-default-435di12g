export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { DailyPostImage } from "@/components/site/daily-post-image";
import { getDailyPosts } from "@/lib/daily-posts";

export const metadata: Metadata = {
  title: "ویترین روزانه",
  description: "آرشیو تصاویر روزانه فروشگاه لوازم آرایشی.",
};

function formatPersianDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat("fa-IR", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default async function DailyPage() {
  const posts = await getDailyPosts();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <header className="mb-10 max-w-2xl">
        <h1 className="font-display text-4xl font-semibold">ویترین روزانه</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          همه تصاویر منتشرشده به ترتیب جدیدترین. برای افزودن عکس جدید به پنل ادمین بروید.
        </p>
      </header>
      {posts.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-border bg-muted/40 p-8 text-center text-muted-foreground">
          هنوز تصویری ثبت نشده است.
        </p>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.id}>
              <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className="relative aspect-[4/5] w-full">
                  <DailyPostImage
                    src={post.imageUrl}
                    alt={post.caption || "تصویر روزانه"}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="space-y-2 p-4">
                  {post.caption ? (
                    <p className="text-sm leading-relaxed">{post.caption}</p>
                  ) : null}
                  <p className="text-xs text-muted-foreground">
                    {formatPersianDate(post.publishedAt)}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
