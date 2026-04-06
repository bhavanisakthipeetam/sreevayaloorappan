export const LOCALES = ["en", "ta", "ml", "hi", "te", "kn"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const LABELS: Record<Locale, string> = {
  en: "English",
  ta: "தமிழ்",
  ml: "മലയാളം",
  hi: "हिंदी",
  te: "తెలుగు",
  kn: "ಕನ್ನಡ",
};
