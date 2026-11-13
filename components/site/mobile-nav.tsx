"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type NavLink = { href: string; label: string };

export function MobileNav({ links }: { links: readonly NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden rounded-full" aria-label="باز کردن منو">
          <Menu className="size-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0">
          <DialogTitle className="text-lg">منو</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(false)}
            aria-label="بستن منو"
          >
            <X className="size-5" />
          </Button>
        </DialogHeader>
        <nav className="flex flex-col gap-1 pt-2" aria-label="ناوبری موبایل">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-4 w-full rounded-full">
            <Link href="/contact" onClick={() => setOpen(false)}>
              مشاوره خرید
            </Link>
          </Button>
        </nav>
      </DialogContent>
    </Dialog>
  );
}
