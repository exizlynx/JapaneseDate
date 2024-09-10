import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  target: "es2020",
  format: ["iife", "cjs", "esm"],
  clean: true,
  dts: true,
  sourcemap: false,
});
