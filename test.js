const validator = require('./dist/index');
const isFloat = validator.num.isFloat('1212.32');
console.log(isFloat, 'isfloat');
