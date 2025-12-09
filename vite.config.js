import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // Image compression plugin - automatically compresses images during build
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80, // 80% quality - good balance between quality and file size
      },
      pngquant: {
        quality: [0.8, 0.9], // 80-90% quality range
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
  base: mode === 'PRODUCTION' ? '/aswenna/' : '/',
  build: {
    // Optimize asset handling
    assetsInlineLimit: 0, // Keep images as separate files for lazy loading
    rollupOptions: {
      output: {
        // Organize assets into folders by type
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          
          let extType = assetInfo.name.split('.').pop();
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
      },
    },
  },
}))
