import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import { cloudflare } from '@cloudflare/vite-plugin'
// import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), cloudflare()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
