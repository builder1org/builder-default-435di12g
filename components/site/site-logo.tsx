import Link from "next/link";
import { Sparkles } from "lucide-react";

export function SiteLogo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2 text-foreground transition-opacity hover:opacity-90"
    >
      <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
        <Sparkles className="size-4" aria-hidden />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-display text-lg font-semibold tracking-tight">رزا بیوتی</span>
        <span className="text-[10px] text-muted-foreground">لوازم آرایشی</span>
      </span>
    </Link>
  );
}
