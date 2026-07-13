import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  {
    ignores: ["dist/**/*", "coverage/**/*"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
        ...globals.browser,
      },
    },

    rules: {
      indent: [
        "error",
        2,
        {
          SwitchCase: 1,
        },
      ],

      "prefer-const": "error",
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-var": "error",
      "no-unused-vars": "error",
      "no-debugger": "error",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
);
