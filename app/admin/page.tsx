export const dynamic = "force-dynamic";

import { AdminDashboard } from "@/components/site/admin-dashboard";
import { AdminLoginForm } from "@/components/site/admin-login-form";
import { getDailyPosts } from "@/lib/daily-posts";
import { getAdminPassword, isAdminAuthenticated } from "@/lib/admin-auth";

export default async function AdminPage() {
  const passwordConfigured = Boolean(getAdminPassword());
  const authed = passwordConfigured && (await isAdminAuthenticated());

  if (!passwordConfigured) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <h1 className="font-display text-2xl font-semibold">پیکربندی ادمین</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          برای ورود به پنل، متغیر{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">ADMIN_PASSWORD</code> را
          در فایل <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">.env.local</code>{" "}
          (محلی) یا در تنظیمات Environment هاست (مثلاً Vercel) قرار دهید. برای آپلود روی سرور
          بدون دیسک نوشتنی،{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">
            BLOB_READ_WRITE_TOKEN
          </code>{" "}
          را هم اضافه کنید.
        </p>
      </div>
    );
  }

  if (!authed) {
    return (
      <div className="py-16">
        <AdminLoginForm />
      </div>
    );
  }

  const posts = await getDailyPosts();
  return <AdminDashboard posts={posts} />;
}
