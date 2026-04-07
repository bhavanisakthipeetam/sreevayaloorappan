import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export const LOCALES = ["en", "ta", "ml", "hi", "te", "kn"];
export const DEFAULT_LOCALE = "en";

export default defineConfig({
  site: "https://www.sreevayaloorappan.org",
  integrations: [tailwind(), sitemap()],
  i18n: {
    locales: LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
