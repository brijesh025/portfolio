import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default defineConfig({
  extends: eslintConfig,
  rules: {
    // turn off unescaped entities errors in JSX
    "react/no-unescaped-entities": "off",

    // make unused vars warnings and ignore `_` prefixes
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],

    // ...existing rules...
  },
});
