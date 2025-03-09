import { defineConfig } from "vite";

export default defineConfig({
    base: process.env.CI ? '/isi/' : undefined,
    build: {
        chunkSizeWarningLimit: 2048,
    },
});
