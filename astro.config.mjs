// @ts-check
// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://workout-tracker-app.github.io',
  base: '/landing',
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
    fallback: {
      es: "en"
    },
    routing: {
      prefixDefaultLocale: false,
      fallbackType: "rewrite"
    }
  }
});