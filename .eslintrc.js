module.exports = {
  env: {
    browser: true
  },
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // allow multi spaces
    'no-multi-spaces': 0,
    // allow semi-colons
    'semi': 0,
    // set indents to 4
    "indent": ["error", 4]
  },
  globals: {
    '$': true,
    'jQuery': true
  }
}
