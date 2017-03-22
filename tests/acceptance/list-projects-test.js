import { test } from 'qunit';
import moduleForAcceptance from 'portfolio/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list projects');

// test('visiting /list-projects', function(assert) {
//   visit('/list-projects');
//
//   andThen(function() {
//     assert.equal(currentURL(), '/list-projects');
//   });
// });

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
