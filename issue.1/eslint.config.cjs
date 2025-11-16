const eslintPluginPrettier = require('eslint-plugin-prettier');
const eslintPluginImport = require('eslint-plugin-import');
const eslintPluginSimpleImportSort = require('eslint-plugin-simple-import-sort');

module.exports = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['node_modules', 'dist', 'build', 'coverage'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      prettier: eslintPluginPrettier,
      import: eslintPluginImport,
      'simple-import-sort': eslintPluginSimpleImportSort,
    },
    rules: {
      'prettier/prettier': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/newline-after-import': 'warn',
      'import/no-duplicates': 'error',
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      eqeqeq: ['error', 'always'],
      'no-var': 'error',
      'prefer-const': 'warn',
    },
  },
];