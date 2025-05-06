import { defineConfig } from "vite";
import path from 'path'
import react from "@vitejs/plugin-react";
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import tailwindcss  from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
  server: {
    open: true,
    host: true,
    port: 8090,
    proxy: {
      '/api/wallpaper': {
        target: 'https://wallpaper.leex.me',
        changeOrigin: true,
        rewrite: path => path.replace(RegExp('/api/wallpaper'), '/api')
      }
    }
  },
});
