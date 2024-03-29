module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-promise-executor-return': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
    'consistent-return': 'off',
    camelcase: 'off',
    'import/extensions': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
