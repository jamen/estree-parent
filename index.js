var step = require('estree-walk').step

module.exports = ancestors

function ancestors (node, root) {
  // Create arrays of parent -> child relationships
  // Stop when we reach the node, or run out of nodes
  var relationship = [[], []]
  for (var pending = [root]; pending.length;) {
    var target = pending.shift()
    if (target === node) break
    var start = pending.length
    step(target, pending)
    var end = pending.length

    // Create shared index between parent and children nodes
    while (end > start) {
      relationship[0].push(pending[start++])
      relationship[1].push(target)
    }
  }

  // Create an array of ancestors from the node using the relationships
  var ancestors = []
  for (var select = node; select;) {
    var index = relationship[0].indexOf(select)
    select = relationship[1][index]
    if (select) ancestors.push(select)
  }

  return ancestors
}
