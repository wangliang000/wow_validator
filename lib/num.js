const numValid = {
  isFloat: /^\d+\.\d+$/,
  isInteger: /^(\d+)$/,
  isZeroStart: /^0(\d*)$/,
  isNotZeroStart: /^[1-9]+$/,
};
function digitCheck({ min, max, isInteger } = { isInteger: true }) {
  let digit;
  if (min && max) {
    digit = `${min},${max}`;
  }
  if (min && !max) {
    digit = `${min},`;
  }
  if (max && !min) {
    digit = `,${max}`;
  }
  const digitRule = digit ? `{${digit}}` : '+';
  const rule = isInteger ? `^\\d${digitRule}$` : `^\\d+\\.\\d${digitRule}$`;
  return new RegExp(rule);
}
exports.digitCheck = digitCheck;
exports.numValid = numValid;
