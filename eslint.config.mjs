import { defineConfig } from "eslint/config";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import simpleImportSort from "eslint-plugin-simple-import-sort"; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default defineConfig([
  {
    // Your main config block
    extends: compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended"),
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins: {
      "simple-import-sort": simpleImportSort 
    },
    rules: {
      semi: ["error", "always"], 
      "simple-import-sort/imports": "error", 
      "simple-import-sort/exports": "error"  
    },
  }
]);
