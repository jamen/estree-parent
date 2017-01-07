# estree-parent

> Get parent of an ESTree node

```js
var parent = require('estree-parent')
var esprima = require('esprima')

// Get source and node somehow:
var source = esprima.parse(/* ... */)
var node = getNodeSomehow(source)

// Get parent:
parent(node, source)
// SwitchStatement { ... }
```

It uses a `WeakMap` cache behind the scenes to make repeated use faster

## Installation

```sh
$ npm install --save estree-parent
```

## Usage

### `parent(node, source)`

Get parent the parent of a node

 - `node` (ESTree `Node`): Node you are getting parent of
 - `source` (ESTree `Node`): Node with children (e.g. `Program`) that contains `node`

Returns `null` if node was not found in the tree

```js
parent(node, source)
// FunctionDeclaration { ... }

parent(node)
// node.parent || null
```

### `parent.ancestors(node, source)`

Get an array of ancestor nodes from `parent` up to `source`.

 - `node` (EStree `Node`): Node you are getting ancestors of
 - `source` (ESTree `Node`): Node with children that contains `node`

```js
parent.ancestors(node, source)
// [ ReturnStatement { ... },
//   SwitchCase { ... },
//   BlockExpression { ... },
//   SwitchStatement { ... },
//   .....
//   Program { ... } ]
```

## License

MIT © [Jamen Marz](https://git.io/jamen)

---

[![version](https://img.shields.io/npm/v/estree-parent.svg?style=flat-square)][package] [![travis](https://img.shields.io/travis/jamen/estree-parent.svg?style=flat-square)](https://travis-ci.org/jamen/estree-parent) [![downloads](https://img.shields.io/npm/dt/estree-parent.svg?style=flat-square)][package] [![license](https://img.shields.io/npm/l/estree-parent.svg?style=flat-square)][package] [![follow](https://img.shields.io/github/followers/jamen.svg?style=social&label=Follow)](https://github.com/jamen)

[package]: https://npmjs.org/package/estree-parent
