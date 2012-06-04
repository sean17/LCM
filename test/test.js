var test = require('tap').test;
var lcm = require('../');

test('lcm', function (t) {
    var res = splitBy(2, 4);
    t.same(res, 4);
    t.end();
});