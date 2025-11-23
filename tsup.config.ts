import { defineConfig } from "tsup";

export default defineConfig({
  globalName: "JapaneseDate",
  entry: ["src/japanese-date.ts"],
  target: "node18",
  format: ["iife", "cjs", "esm"],
  clean: true,
  dts: true,
  splitting: false,
  sourcemap: true,
  outDir: "dist",
  outExtension({ format }) {
    return {
      js: format === "iife" ? ".js" : format === "cjs" ? ".cjs" : ".mjs",
    };
  },
});
