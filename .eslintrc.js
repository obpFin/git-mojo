module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', '@vue/prettier'],
  //plugins: ['html'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-const-assign': 'warn',
    'no-this-before-super': 'warn',
    'no-undef': 'warn',
    'no-unreachable': 'warn',
    'no-unused-vars': 'warn',
    'constructor-super': 'warn',
    'valid-typeof': 'warn'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
