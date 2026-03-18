import { defineConfig } from "tsup";

export default defineConfig([
  // Node.js 向け: CJS + ESM + 型定義
  {
    entry: ["src/japanese-date.ts"],
    platform: "node",
    target: "node18",
    format: ["cjs", "esm"],
    clean: true,
    dts: true,
    splitting: false,
    sourcemap: true,
    outDir: "dist",
    outExtension({ format }) {
      return {
        js: format === "cjs" ? ".cjs" : ".mjs",
      };
    },
  },
  // ブラウザ向け: IIFE (CDN / script タグ)
  {
    globalName: "JapaneseDate",
    entry: ["src/japanese-date.ts"],
    platform: "browser",
    target: "es2017",
    format: ["iife"],
    clean: false,
    splitting: false,
    sourcemap: true,
    outDir: "dist",
    outExtension() {
      return { js: ".js" };
    },
    footer: {
      js: "globalThis.JapaneseDate = JapaneseDate.default || JapaneseDate;",
    },
  },
]);
