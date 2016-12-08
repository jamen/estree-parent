# estree-ancestors

> Get a node's ancestors up to a root node

```js
var ancestors = require('estree-ancestors')
var esprima = require('esprima')

var root = esprima.parse(/* ... */)
// Get node out of root:
var node = getNodeSomehow(root)

// Get path of ancestors in root
ancestors(node, root)
// [ BlockStatement { ... },
//   IfStatement { ... },
//   BlockStatement { ... },
//   ... ]
```

## Installation

```sh
$ npm install --save estree-ancestors
```

## Usage

### `ancestors(node, root)`

Get array of ancestors.  Containing the path of nodes between `node`'s parent and `root`.

```js
ancestors(node, root)
// [ parent, ...otherNodes, root ]
```

#### Parameters

 - `node` (Estree `Node`): The node you want to find ancestors of.
 - `root` (Estree `Node`): A base node, the last ancestors in your array.

### `ancestors.parent(node, root)`

Shorthand for `ancestors(node, root)[0]`.  Reads better.

```js
var root = esprima.parse('function foo () { return 1 }')
var node = root.body[0].body.body[0].argument
// The `1` Literal

ancestors.parent(node, root)
// ReturnStatement { ... }
```

## License

MIT © [Jamen Marz](https://git.io/jamen)

---

[![version](https://img.shields.io/npm/v/estree-ancestors.svg?style=flat-square)][package] [![travis](https://img.shields.io/travis/jamen/estree-ancestors.svg?style=flat-square)](https://travis-ci.org/jamen/estree-ancestors) [![downloads](https://img.shields.io/npm/dt/estree-ancestors.svg?style=flat-square)][package] [![license](https://img.shields.io/npm/l/estree-ancestors.svg?style=flat-square)][package] [![follow](https://img.shields.io/github/followers/jamen.svg?style=social&label=Follow)](https://github.com/jamen)

[package]: https://npmjs.org/package/estree-ancestors
