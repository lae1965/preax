import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: "Career App",
  },
  source: {
    alias: {
      "@assets": "./src/assets",
      "@components": "./src/components",
      "@constants": "./src/constants",
      "@data": "./src/data",
      "@hooks": "./src/hooks",
      "@store": "./src/store",
      "@utils": "./src/utils",
    }
  },
  output: {
    cssModules: {
      localIdentName: isProd
        ? '[local]-[hash:base64:6]'
        : '[path][name]__[local]-[hash:base64:6]',
    },
  },
});
