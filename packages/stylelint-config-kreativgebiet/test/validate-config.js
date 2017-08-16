var config = require('../');
var test = require('tape');
var stylelint = require('stylelint');

test('load config in eslint to validate corrent syntax', function (t) {
  stylelint.lint({
    code: '.test { display: block; }',
    config,
  })
    .then(() => {
      t.ok(true);
      t.end();
    })
    .catch((err) => {
      t.fail(err);
      t.end();
    });
});
