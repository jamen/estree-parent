var test = require('tape')
var esprima = require('esprima')
var parent = require('./')

test('find parents', function (t) {
  t.plan(2)

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
    }`)

  var node = root.body[0].body.body[0].consequent.body[1].cases[0]

  t.is(
    parent(node, root),
    root.body[0].body.body[0].consequent.body[1],
    'found parent'
  )

  t.same(parent.ancestors(node, root), [
    root.body[0].body.body[0].consequent.body[1],
    root.body[0].body.body[0].consequent,
    root.body[0].body.body[0],
    root.body[0].body,
    root.body[0],
    root
  ], 'found ancestors')
})
