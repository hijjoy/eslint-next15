// @ts-check
// @ts-ignore
import pluginJs from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

import defaultConfig from './eslint/default.mjs';
import importConfig from './eslint/import.mjs';
import reactConfig from './eslint/react.mjs';
import tailwindConfig from './eslint/tailwind.mjs';
import tsConfig from './eslint/typescript.mjs';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    settings: {
      react: {
        version: 'detect', // React 버전을 자동 감지
      },
    },
  },
  {
    rules: {
      'prettier/prettier': 'warn',
    },
  },
  tsConfig,
  pluginJs.configs.recommended,
  defaultConfig,
  importConfig,
  reactConfig,
  tailwindConfig,
  prettierPluginRecommended,
];
