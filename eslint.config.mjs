import js from '@eslint/js';
import expoConfig from 'eslint-config-expo/flat.js';
import { flatConfigs as importFlatConfigs } from 'eslint-plugin-import-x';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import promisePlugin from 'eslint-plugin-promise';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import securityPlugin from 'eslint-plugin-security';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  expoConfig,
  {
    rules: {
      ...js.configs.all.rules,

      'capitalized-comments': 0,
      'class-methods-use-this': 0,
      'func-style': 0,
      'id-length': 0,
      'no-alert': 0,
      'no-console': 0,
      'no-implicit-globals': 0,
      'no-inline-comments': 0,
      'no-magic-numbers': 0,
      'no-negated-condition': 0,
      'no-param-reassign': 0,
      'no-plusplus': 0,
      'no-ternary': 0,
      'no-use-before-define': 0,
      'one-var': 0,
      'prefer-destructuring': 0,
      'sort-imports': 0,
      'sort-keys': 0,
      strict: 0,
      'vars-on-top': 0,
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.nodeBuiltin,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactPlugin.configs.flat.recommended.rules,
      ...reactPlugin.configs.flat['jsx-runtime'].rules,
      ...reactHooksPlugin.configs['recommended-latest'].rules,

      'react/prop-types': 0,
    },
  },
  {
    ...promisePlugin.configs['flat/recommended'],
    rules: {
      ...promisePlugin.configs['flat/recommended'].rules,
      'promise/always-return': 0,
    },
  },
  {
    ...importFlatConfigs.recommended,
    rules: {
      ...importFlatConfigs.recommended.rules,
      'import-x/namespace': 0,
    },
  },
  {
    ...securityPlugin.configs.recommended,
    rules: {
      ...securityPlugin.configs.recommended.rules,
      'security/detect-object-injection': 0,
      'security/detect-non-literal-fs-filename': 0,
      'security/detect-possible-timing-attacks': 0,
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'arrow-parens': ['error', 'always'],
      complexity: ['error', 12],
      'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
      'max-len': [
        'error',
        {
          code: 120,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
        },
      ],
      'max-classes-per-file': ['error', 5],
      'max-nested-callbacks': ['error', 4],
      'max-params': ['error', 8],
      'max-depth': ['error', 5],
      'max-lines-per-function': ['error', 100],
      'max-lines': ['error', 500],
      'max-statements': ['error', 25],
      'no-underscore-dangle': ['error', { allow: ['_id'] }],
      'no-trailing-spaces': ['error', { skipBlankLines: true, ignoreComments: true }],
      'spaced-comment': 'error',
    },
  },
  {
    ignores: ['node_modules/**', '.expo/**', 'dist/**', 'coverage/**', 'web-build/**'],
  },
  prettierRecommended,
]);
