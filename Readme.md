# wow_Validator
##
[![jsdelivr CDN](https://data.jsdelivr.com/v1/package/npm/@uiw/react-codemirror/badge)](https://www.jsdelivr.com/package/npm/@uiw/react-codemirror)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-codemirror.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-codemirror)
[![Build & Deploy](https://github.com/uiwjs/react-codemirror/workflows/Build%20&%20Deploy/badge.svg)](https://github.com/uiwjs/react-codemirror/actions)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-codemirror/file/README.md)
[![npm version](https://img.shields.io/npm/v/@uiw/react-codemirror.svg)](https://www.npmjs.com/package/@uiw/react-codemirror)
[![Coverage Status](https://uiwjs.github.io/react-codemirror/coverage/badges.svg)](https://uiwjs.github.io/react-codemirror/coverage/lcov-report/)
[![Open in Gitpod](https://shields.io/badge/Open%20in-Gitpod-green?logo=Gitpod)](https://gitpod.io/#https://github.com/uiwjs/react-codemirror)
> 本库仅为练习正则，逐步完善中。

## usage

```js
const { validator } = require('./dist/index');
const isFloat = validator.num.isFloat('1212.32');
console.log(isFloat, 'isfloat');
```
