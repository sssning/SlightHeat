import { defineConfig } from "vite";
import { resolve } from "node:path";

import react from "@vitejs/plugin-react";

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // @/xxxx => src/xxxx
      {
        find: /@\//,
        replacement: `${pathResolve("src")}/`,
      },
    ],
  },
  server: {
    open: true,
    host: true,
    port: 8090,
  },
});
