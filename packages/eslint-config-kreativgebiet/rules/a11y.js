
module.exports = {
  plugins: [
    'jsx-a11y',
  ],
  rules: {
    // Only let the user give a static element an `onClick` when used with `role="button"`
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
    'jsx-a11y/no-static-element-interactions': 1,
  },
};
