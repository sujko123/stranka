import { useTranslate } from "@/lib/i18n";

export function useCopy() {
  const { language } = useTranslate();
  return (sk: string, en: string) => language === "sk" ? sk : en;
}
