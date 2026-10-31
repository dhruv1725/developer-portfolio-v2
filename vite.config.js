import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
plugins: [
react(),
tailwindcss(),
...(process.env.ANALYZE === 'true'
? [
visualizer({
filename: 'dist/stats.html',
open: true,
gzipSize: true,
brotliSize: true,
}),
]
: []),
],
})