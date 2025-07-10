module.exports = {
  'env': {
    'browser': true,
    'cypress/globals': true,
  },
  'plugins': [
    'cypress',
  ],
  'extends': ['google'],
  'overrides': [
    {
      'env': {
        'cypress/globals': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 'latest',
  },
  'rules': {
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error',
    'cypress/no-pause': 'error',
  },
};