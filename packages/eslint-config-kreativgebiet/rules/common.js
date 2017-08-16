
module.exports = {
  rules: {
    // Force semicolon for each line and everywhere, where needed
    // http://eslint.org/docs/rules/semi
    'semi': 'error',

    // Only let the user require on top-level and globally.
    // http://eslint.org/docs/rules/global-require
    'global-require': 2,

    // Don't let the user return-assign (only in parentheses)
    // http://eslint.org/docs/rules/no-return-assign
    'no-return-assign': 'error',

    // Prevent underscores as prefix in variables, we live in an ES6 world
    // http://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': ['error', {
      allowAfterThis: true,
      allowAfterSuper: true,
    }],

    // Only allow camel case variables, if in need, disable this rule in file or line
    // http://eslint.org/docs/rules/camelcase
    'camelcase': 'off',

    // Allow constructors to be non capitalized.
    // http://eslint.org/docs/rules/new-cap
    'new-cap': 'off',

    // Don't let variables be used before they were defined
    // http://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': 'off',

    // Don't let parameters be reassigned
    // http://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': 'error',

    // A switch-case needs to be surounded by brackets
    // http://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 'error',

    // Let the user use return in an if-else statement
    // http://eslint.org/docs/rules/no-else-return
    'no-else-return': 'off',

    // Prefer a consistent return value
    // http://eslint.org/docs/rules/consistent-return
    'consistent-return': 'off',
  },
};
