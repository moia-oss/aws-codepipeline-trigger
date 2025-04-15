import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import typescript from 'typescript-eslint';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  {
    ignores: ['node_modules/*', 'dist/*', '**/*.d.ts', '**/*.js'],
  },
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  },
  eslint.configs.recommended,
  ...typescript.configs.recommended,
  prettier,
];
