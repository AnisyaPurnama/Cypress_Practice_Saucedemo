import js from '@eslint/js';
import globals from 'globals';
import cypress from 'eslint-plugin-cypress';

export default [
  {
    ...js.configs.recommended,
    files: ['**/*.js'],
    ignores: ['node_modules', 'dist', 'cypress/reports'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      cypress,
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
  {
    files: ['cypress/**/*.js'],
    languageOptions: {
      globals: {
        Cypress: 'readonly',
        cy: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        after: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
    },
    plugins: {
      cypress,
    },
    rules: {
      //'cypress/no-unnecessary-waiting': 'warn',
      //'cypress/no-assigning-return-values': 'error'
    },
  },
];
