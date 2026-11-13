import Link from "next/link";
import { DailyPostImage } from "@/components/site/daily-post-image";
import { getDailyPosts } from "@/lib/daily-posts";

function formatPersianDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat("fa-IR", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export async function DailyShowcaseSection() {
  const posts = await getDailyPosts();
  const latest = posts.slice(0, 6);

  if (latest.length === 0) {
    return (
      <section className="border-y border-border/60 bg-secondary/25">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-16">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">ویترین روزانه</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            هنوز تصویری منتشر نشده. از مسیر{" "}
            <Link href="/admin" className="font-medium text-primary hover:underline">
              پنل ادمین
            </Link>{" "}
            می‌توانید هر روز عکس جدید بگذارید.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="border-y border-border/60 bg-secondary/25">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-16">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">ویترین روزانه</h2>
            <p className="mt-2 text-muted-foreground">آخرین تصاویر منتشرشده توسط فروشگاه</p>
          </div>
          <Link href="/daily" className="text-sm font-medium text-primary hover:underline">
            آرشیو همه
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {latest.map((post, index) => (
            <li key={post.id} className="group">
              <article className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm">
                <div className="relative aspect-square w-full overflow-hidden">
                  <DailyPostImage
                    src={post.imageUrl}
                    alt={post.caption || "تصویر روزانه"}
                    priority={index === 0}
                  />
                </div>
                {(post.caption || post.publishedAt) && (
                  <div className="space-y-1 p-3">
                    {post.caption ? (
                      <p className="line-clamp-2 text-xs leading-relaxed">{post.caption}</p>
                    ) : null}
                    <p className="text-[10px] text-muted-foreground">
                      {formatPersianDate(post.publishedAt)}
                    </p>
                  </div>
                )}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
