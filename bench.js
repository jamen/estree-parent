var parent = require('./')
var Suite = require('benchmark').Benchmark.Suite
var bench = new Suite('walk')

var esprima = require('esprima')
var source = esprima.parse(`
function foo (x, done) {
  if (x > 5) {
    return done(null, function (foo) {
      if (foo !== null) {
        return foo(function (x, y) {
          switch (x * y) {
            case 11: {
              return 'Hello'
            }
          }
        })
      }
    }, function (x, y) {
      switch (x + y) {
        case 10: {
          return 123
        }
        default: {
          return 'world'
        }
      }
    })
  }
}
`)
var node = source.body[0].body.body[0].consequent.body[0].argument.arguments[1].body.body[0]
.consequent.body[0].argument.arguments[0].body.body[0].cases[0].consequent[0].body[0].argument

bench.add('parent', function () {
  parent(node, source)
})

var ancestors = parent.ancestors
bench.add('ancestors', function () {
  ancestors(node, source)
})

// Run the stuff:
bench.on('cycle', function(event) {
  console.log(String(event.target))
})
bench.on('error', console.error)
bench.run()
