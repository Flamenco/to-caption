import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import { defineConfig } from 'eslint/config'
import headers from 'eslint-plugin-headers'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { notice } from './scripts/copyright.js'

export default defineConfig(
  { ignores: ['dist/toCaption.js', 'node_modules/'] },
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.cjs'],
    languageOptions: { globals: { ...globals.node, ...globals.mocha } },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: { sourceType: 'commonjs' },
  },
  {
    files: ['**/*.ts'],
    languageOptions: { parser: tseslint.parser },
    rules: { 'no-unused-vars': 'off' },
  },
  {
    files: ['src/**', 'test/**', 'dist/toCaption.d.ts'],
    plugins: { headers },
    rules: {
      // /*! keeps the banner through minification
      'headers/header-format': ['error', {
        source: 'string',
        content: `to-caption\n\n${notice}\nReleased under the MIT license`,
        blockPrefix: '!\n',
        trailingNewlines: 2,
      }],
    },
  },
  {
    plugins: { '@stylistic': stylistic },
    rules: {
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/quotes': ['error', 'single'],
      'no-unexpected-multiline': 'error',
    },
  },
)
