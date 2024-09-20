import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: "Career App",
  },
  source: {
    alias: {
      "@assets": "./src/assets",
      "@components": "./src/components",
      "@data": "./src/data",
      "@pages": "./src/pages",
      "@store": "./src/store",
      "@utils": "./src/utils",
    }
  },
});
