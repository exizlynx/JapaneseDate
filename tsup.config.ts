import { defineConfig } from "tsup";

export default defineConfig({
  globalName: "JapaneseDate",
  entry: ["src/japanese-date.ts"],
  target: "es2016",
  format: ["iife", "cjs", "esm"],
  clean: true,
  dts: true,
  sourcemap: false,
  outExtension({ format }) {
    return {
      js: format === "iife" ? ".dist.js" : format === "cjs" ? ".js" : ".mjs",
    };
  },
  footer: ({ format }) => {
    if (format === "iife") {
      return {
        js: "if (typeof JapaneseDate !== 'undefined' && JapaneseDate.default) { JapaneseDate = JapaneseDate.default; }",
      };
    }
  },
});
