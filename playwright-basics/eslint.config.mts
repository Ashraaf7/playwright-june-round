import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import playwright from "eslint-plugin-playwright";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    rules: {
      'semi': 'warn',
      'no-console': [
        'error', { "allow": ["warn", "error"] }
      ]
    }
  },
  {
    files: ["**/*.spec.ts"],
    plugins: { playwright, },
    rules: {
      'playwright/no-focused-test': 'warn',
    }
  },
  {
    files: ["**/*.spec.ts"],
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          "selector": "variable",
          "format": ["camelCase"]
        },
        {
          "selector": "function",
          "format": ["camelCase"]
        },
        {
          "selector": "property",
          "format": ["camelCase"]
        },
        {
          "selector": "class",
          "format": ["PascalCase"]
        }
      ]
    }
  },
  {
    files: [
      '**/*.spec.ts',
    ],

    rules: {
      // Disallow certain syntax patterns in tests 
      'no-restricted-syntax': [
        'error',

        // No raw locator()
        {
          selector:
            "CallExpression[callee.property.name='locator']",

          message:
            'Do not use raw locators inside tests. Use Page Objects.',
        },

        // No direct getByRole()
        {
          selector:
            "CallExpression[callee.property.name='getByRole']",

          message:
            'Do not use getByRole() directly inside tests. Use Page Objects.',
        },

        // No direct getByText()
        {
          selector:
            "CallExpression[callee.property.name='getByText']",

          message:
            'Do not use getByText() directly inside tests. Use Page Objects.',
        },

        // No direct getByLabel()
        {
          selector:
            "CallExpression[callee.property.name='getByLabel']",

          message:
            'Do not use getByLabel() directly inside tests. Use Page Objects.',
        },
      ],
    },
  },
]);
