import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const r = (p: string) => path.resolve(__dirname, p);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': r('src'),
      '@/app': r('src/app'),
      '@/api': r('src/api'),
      '@/assets': r('src/assets'),
      '@/config': r('src/config'),
      '@/features': r('src/features'),
      '@/layouts': r('src/layouts'),
      '@/lib': r('src/lib'),
      '@/pages': r('src/pages'),
      '@/shared': r('src/shared'),
      '@/styles': r('src/styles'),
      '@/types': r('src/types'),
      '@/hooks': r('src/shared/hooks'),
    },
  },
  server: {
    port: 5173,
    strictPort: false,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
});
