# LOWERCASE OBJECT KEYS  

[![Build Status](https://travis-ci.org/pilmee/lowercase-object-keys.svg?branch=master)](https://travis-ci.org/pilmee/lowercase-object-keys)  [![Dependencies Status](https://david-dm.org/pilmee/lowercase-object-keys.svg)](https://david-dm.org/pilmee/lowercase-object-keys.svg) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Instruction that transforms the names of the properties of an object to lowercase

## How to install?:
```bash
npm i lowercase-object-keys
```
```bash
npm i lowercase-object-keys --save-dev
```

## How to use?:
```javascript
var lowercaseObjectKeys = require('lowercase-object-keys');
var obj = { NAME: 'Nelida', Age: 30 };

console.log(lowercaseObjectKeys(obj));
//result: { name: 'Nelida', age: 30 };

```
