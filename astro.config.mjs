// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Quattrocento",
      cssVariable: "--font-quattrocento",
      weights: [700],
    },
  ],
});
