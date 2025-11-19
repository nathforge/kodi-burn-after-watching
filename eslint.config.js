import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  {
    ignores: [
      'data/*',
      'dist/**',
      'node_modules/**',
      'coverage/**',
      '.temp/**',
      'state/**',
      'migrations/**',
    ],
  },
  js.configs.recommended,
  ...compat.config({
    extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    env: {
      es2022: true,
      node: true,
    },
    rules: {
      'no-console': 'off',
    },
  }),
  {
    files: ['tests/**/*.test.ts'],
    languageOptions: {
      globals: {
        afterAll: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        beforeEach: 'readonly',
        describe: 'readonly',
        expect: 'readonly',
        it: 'readonly',
      },
    },
  },
];
