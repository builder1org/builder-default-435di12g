"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-sm leading-relaxed"
        role="status"
      >
        پیام شما (نمونه) ثبت شد. برای اتصال به ایمیل یا CRM واقعی، تنظیمات بک‌اند
        لازم است؛ فعلاً این فرم فقط نمایشی است.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">نام</Label>
          <Input id="name" name="name" required autoComplete="name" placeholder="نام شما" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">تلفن</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            dir="ltr"
            className="text-end"
            required
            autoComplete="tel"
            placeholder="09xx xxx xxxx"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">موضوع</Label>
        <Input id="subject" name="subject" required placeholder="مثلاً استعلام رژ لب" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">پیام</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="محصول مورد نظر یا سوال خود را بنویسید..."
        />
      </div>
      <Button type="submit" className="w-full rounded-full sm:w-auto">
        ارسال پیام (نمایشی)
      </Button>
    </form>
  );
}
