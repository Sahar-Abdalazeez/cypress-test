import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        plugins: { js },
        extends: ["js/recommended"],
        rules: {
            //not allowing var
            "no-var": "error",
            //not allowung unused vars
            "no-unused-vars": "error",
            //must use semicolon
            semi: ["error", "always"],
            //must use === instead of ==
            eqeqeq: ["error", "always"],
            // require braces for all control statements
            curly: ["error", "all"],
        },
    },
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        languageOptions: { globals: globals.browser },
    },
    tseslint.configs.recommended,
]);
