import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import playformCompress from "@playform/compress";
import astroIcon from 'astro-icon';
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    astroIcon({
      include: {
        mdi: ["*"],
        'ri': ['*'],
        'simple-icons': ['*'],
      },
    }),
    playformCompress({
      CSS: false,
      Image: false,
      Action: {
        Passed: async () => true,   // https://github.com/PlayForm/Compress/issues/376
      },
    })
  ],
  outDir: 'dist',
  output: 'static',
  adapter: vercel({
    edge: false, // Set to true if you need Edge Runtime
    prerender: {
      default: true, // Enable static site generation
    },
  }),
});