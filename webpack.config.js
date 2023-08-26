const path = require('path');
module.exports = {
  entry: './lib/index.js',
  mode: 'production',
  output: {
    clean: true,
    libraryTarget: 'umd',
    filename: 'index.js',
    globalObject: 'this',
    library: 'wow_validator',
    path: path.join(process.cwd(), '/dist'),
  },
};
