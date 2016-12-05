var test = require('tape')
var esprima = require('esprima')
var ancestors = require('./')

test('finds acestors', function (t) {
  t.plan(1)

  var root = esprima.parse(`
    function foo (x) {
      if (x > 5) {
        console.log('foo')
        switch ('foo') {
          case 'foo': {
            return x * 2
          }
        }
      }
    }
    `)

  var node = root.body[0].body.body[0].consequent.body[1].cases[0]

  var nodeAncestors = ancestors(node, root)

  t.is(nodeAncestors[nodeAncestors.length - 1], root, 'found ancestors correctly')
})
