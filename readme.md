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

Get array of the path of ancestors from `node` to `root`.

#### Parameters

 - `node` (Estree `Node`): The node you want to find ancestors of.
 - `root` (Estree `Node`): A base node, the last ancestors in your array, a patriarch.

## License

MIT © [Jamen Marz](https://git.io/jamen)

---

[![version](https://img.shields.io/npm/v/estree-modules.svg?style=flat-square)][package] [![travis](https://img.shields.io/travis/jamen/estree-modules.svg?style=flat-square)](https://travis-ci.org/jamen/estree-modules) [![downloads](https://img.shields.io/npm/dt/estree-modules.svg?style=flat-square)][package] [![license](https://img.shields.io/npm/l/express.svg?style=flat-square)][package] [![follow](https://img.shields.io/github/followers/jamen.svg?style=social&label=Follow)](https://github.com/jamen)

[package]: https://npmjs.org/package/estree-modules
