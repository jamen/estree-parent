var step = require('estree-walk').step
var WeakMap = require('es6-weak-map')

module.exports = parent

parent.ancestors = ancestors
parent._parents = new WeakMap()
var parents = parent._parents

function parent (node, source) {
  // Handle no `source` param or `node.parent`:
  if (!source || node.parent) {
    return node.parent || null
  }

  // Get parent from cache:
  var parent = parents.get(node)
  if (!parent) {
    // Create missing cache:
    for (var pending = [source]; pending.length;) {
      var select = pending.pop()
      var start = pending.length
      step(select, pending)
      var end = pending.length
      while (end > start) {
        var child = pending[start++]
        if (!parents.has(child)) {
          parents.set(child, select)
          if (child === node) {
            parent = select
          }
        }
      }
    }
  }

  return parent || null
}


function ancestors (node, source) {
  // Create an array of ancestors:
  for (var ancestors = [], ancestor = node; ancestor;) {
    if (ancestor = parent(ancestor, source)) {
      ancestors.push(ancestor)
    }
  }
  return ancestors
}
