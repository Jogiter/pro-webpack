module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  // for more configs see https://github.com/vuejs/eslint-plugin-vue#user-content-gear-configs
  extends: ['plugin:vue/base', 'standard'],
  plugins: [
    'vue'
  ]
}
