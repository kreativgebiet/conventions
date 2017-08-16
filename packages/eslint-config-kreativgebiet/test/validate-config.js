var test = require('tape');

test('load config in eslint to validate corrent syntax', function (t) {
  var CLIEngine = require('eslint').CLIEngine;

  var cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'index.js',
  });

  t.ok(cli.executeOnText('var foo\n'));
  t.end();
});
