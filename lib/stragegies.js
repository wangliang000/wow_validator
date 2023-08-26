const own = {}.hasOwnProperty;
class GeneratorValid {
  mounter = {};
  constructor({ validators, mounter, group }) {
    if (mounter) {
      this.mounter = mounter;
    }
    this.validators = validators;
    this.group = group;
    this.init();
  }
  init() {
    const { mounter, group } = this;
    const hasKey = own.call(mounter, group);
    if (!hasKey) {
      this.mounter[group] = {};
    }
    this.mountRegExp();
  }
  mountRegExp() {
    const rules = {};
    Object.entries(this.validators).forEach(([name, reg]) => {
      if (reg instanceof RegExp) {
        rules[name] = (value) => reg.test(value);
      }
    });
    this.mounter[this.group] = rules;
  }
  addRule(group, name, rule) {
    const curGroup = this.mounter[group];
    curGroup[name] = (value) => rule.test(value);
    return this;
  }
}

module.exports = GeneratorValid;
