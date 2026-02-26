import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Hero");
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold gradient-text">{t("title")}</h1>
        <p className="mt-4 text-muted max-w-2xl mx-auto">{t("subtitle")}</p>
      </div>
    </main>
  );
}
