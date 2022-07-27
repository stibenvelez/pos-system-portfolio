import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            workbox: {
                sourcemap: true,
            },
        }),
    ],
    test: {
        environment: "happy-dom",
    },
    root: "./",
    build: {
        outDir: "dist",
        manifest: true,
    },
    publicDir: "assets",
});
