"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  className?: string;
}

export default function LanguageToggle({ className }: LanguageToggleProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: "en" | "es") {
    if (newLocale === locale) return;
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className={cn("inline-flex rounded-full border border-white/10 p-0.5", className)}>
      <button
        onClick={() => switchLocale("en")}
        className={cn(
          "cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-colors",
          locale === "en"
            ? "bg-emerald-500 text-white"
            : "text-white/60 hover:text-white"
        )}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale("es")}
        className={cn(
          "cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-colors",
          locale === "es"
            ? "bg-emerald-500 text-white"
            : "text-white/60 hover:text-white"
        )}
      >
        ES
      </button>
    </div>
  );
}
