
module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/common.js',
    './rules/import.js',
    './rules/react.js',
  ],
  plugins: [
    'eslint-plugin-react',
  ],
  rules: {},
};
