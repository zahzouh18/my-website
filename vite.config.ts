import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/", // تأكد من أن Vite يستخدم المسار الجذر
  server: {
    host: "::",
    port: 8080,
    open: true, // يفتح المتصفح تلقائيًا عند تشغيل Vite
  },
  build: {
    outDir: "dist", // تحديد مجلد الإخراج
    sourcemap: true, // تحسين التصحيح
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    port: 5000, // ضبط منفذ المعاينة بعد البناء
    open: true, // يفتح المتصفح تلقائيًا عند تشغيل `vite preview`
  }
}));
