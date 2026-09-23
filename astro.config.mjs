// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Dirección pública: la vista previa de WhatsApp necesita links completos
  site: 'https://boda-julio-y-roxana-2026.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  }
});