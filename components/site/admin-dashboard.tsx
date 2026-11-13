"use client";

import { useActionState, useTransition } from "react";
import {
  deleteDailyPostFormAction,
  logoutAction,
  uploadDailyPostAction,
  type ActionState,
} from "@/app/admin/actions";
import type { DailyPost } from "@/lib/daily-posts";
import { DailyPostImage } from "@/components/site/daily-post-image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const initial: ActionState = {};

function formatPersianDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat("fa-IR", { dateStyle: "medium", timeStyle: "short" }).format(
      new Date(iso)
    );
  } catch {
    return iso;
  }
}

export function AdminDashboard({ posts }: { posts: DailyPost[] }) {
  const [uploadState, uploadAction, uploadPending] = useActionState(uploadDailyPostAction, initial);
  const [logoutPending, startLogout] = useTransition();

  return (
    <div className="mx-auto max-w-3xl space-y-10 px-4 py-10 sm:px-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold">مدیریت ویترین روزانه</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            هر روز یک عکس آپلود کنید؛ در صفحه اصلی و{" "}
            <a href="/daily" className="text-primary hover:underline">
              آرشیو
            </a>{" "}
            نمایش داده می‌شود.
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          className="rounded-full"
          disabled={logoutPending}
          onClick={() => startLogout(() => logoutAction())}
        >
          خروج
        </Button>
      </header>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold">انتشار تصویر جدید</h2>
        {uploadState.error ? (
          <p className="mt-3 rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive" role="alert">
            {uploadState.error}
          </p>
        ) : null}
        {uploadState.success ? (
          <p className="mt-3 rounded-lg bg-primary/10 px-3 py-2 text-sm text-primary" role="status">
            {uploadState.success}
          </p>
        ) : null}
        <form action={uploadAction} className="mt-5 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="image">تصویر</Label>
            <Input
              id="image"
              name="image"
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="caption">توضیح کوتاه (اختیاری)</Label>
            <Textarea
              id="caption"
              name="caption"
              rows={3}
              maxLength={280}
              placeholder="مثلاً رژ جدید امروز یا آرایش پیشنهادی…"
            />
          </div>
          <Button type="submit" className="rounded-full" disabled={uploadPending}>
            {uploadPending ? "در حال آپلود…" : "انتشار"}
          </Button>
        </form>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">تصاویر قبلی ({posts.length})</h2>
        {posts.length === 0 ? (
          <p className="text-sm text-muted-foreground">هنوز پستی ثبت نشده.</p>
        ) : (
          <ul className="space-y-4">
            {posts.map((post) => (
              <li
                key={post.id}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 sm:flex-row sm:items-center"
              >
                <div className="relative size-24 shrink-0 overflow-hidden rounded-xl border border-border">
                  <DailyPostImage src={post.imageUrl} alt={post.caption || "تصویر"} sizes="96px" />
                </div>
                <div className="min-w-0 flex-1 space-y-1">
                  {post.caption ? <p className="text-sm">{post.caption}</p> : null}
                  <p className="text-xs text-muted-foreground">{formatPersianDate(post.publishedAt)}</p>
                </div>
                <DeletePostButton id={post.id} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function DeletePostButton({ id }: { id: string }) {
  const [state, action, pending] = useActionState(deleteDailyPostFormAction, initial);

  return (
    <form action={action}>
      <input type="hidden" name="id" value={id} />
      {state.error ? <span className="sr-only">{state.error}</span> : null}
      <Button type="submit" variant="destructive" size="sm" className="rounded-full" disabled={pending}>
        {pending ? "…" : "حذف"}
      </Button>
    </form>
  );
}
