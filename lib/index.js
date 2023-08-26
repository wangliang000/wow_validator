const { numValid, digitCheck } = require('./num.js');
const GeneratorValid = require('./stragegies.js');
const stragegies = new GeneratorValid({
  validators: numValid,
  group: 'num',
}).addRule(
  'num',
  'twoDigitFloatCheck',
  digitCheck({ min: 2, max: 2, isInteger: false }),
).mounter;

module.exports = stragegies;
// console.log(stragegies.num.twoDigitFloatCheck('122.12'));
