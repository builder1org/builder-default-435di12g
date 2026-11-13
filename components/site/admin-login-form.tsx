"use client";

import { useActionState } from "react";
import { loginAction, type ActionState } from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initial: ActionState = {};

export function AdminLoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, initial);

  return (
    <form action={formAction} className="mx-auto max-w-sm space-y-5 rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div>
        <h1 className="font-display text-2xl font-semibold">ورود ادمین</h1>
        <p className="mt-1 text-sm text-muted-foreground">مدیریت تصاویر روزانه فروشگاه</p>
      </div>
      {state.error ? (
        <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive" role="alert">
          {state.error}
        </p>
      ) : null}
      <div className="space-y-2">
        <Label htmlFor="password">رمز ادمین</Label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          dir="ltr"
          className="text-end"
        />
      </div>
      <Button type="submit" className="w-full rounded-full" disabled={pending}>
        {pending ? "در حال ورود…" : "ورود"}
      </Button>
      <p className="text-xs leading-relaxed text-muted-foreground">
        رمز را در <code className="text-foreground">ADMIN_PASSWORD</code> تنظیم کنید. روی
        Vercel برای آپلود پایدار، <code className="text-foreground">BLOB_READ_WRITE_TOKEN</code>{" "}
        هم لازم است.
      </p>
    </form>
  );
}
