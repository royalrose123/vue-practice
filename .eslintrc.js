module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  ignorePatterns: ['**/static/js/*.js'],
  // add your custom rules here
  rules: {
    'no-useless-escape': 0,
    'import/no-named-as-default': 0,
    'no-console': 'off',
    quotes: [2, 'single', { avoidEscape: true }],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  }
}
