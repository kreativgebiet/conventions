
module.exports = {
  plugins: [
    // Load the react plugin to allow the rules
    // https://github.com/yannickcr/eslint-plugin-react
    'react',
  ],
  rules: {
    // Let the user only align the closing brackets with the opening tag-aligned
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    'react/jsx-closing-bracket-location': [1, 'tag-aligned'],

    // Allow .js and .jsx as extensions
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],

    // Warn the user when stateless should be used but isn't
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': 1,

    // Completely disable prop types since they are only needed for shared components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 0,

    // Show an error when `dangerouslySetInnerHTML` is used. If needed, disable manually.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    'react/no-danger': 2,

    // Forbid `PropTypes.any` for prop types of an component.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    'react/forbid-prop-types': [1, { 'forbid': ['any'] }],
  },
};
