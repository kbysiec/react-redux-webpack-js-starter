const babel = require('@babel/core');
const jestPreset = require('babel-preset-jest');

module.exports = {
  process(src) {
    const transformCfg = {
      presets: ['@babel/env', '@babel/react', jestPreset],
      retainLines: true,
    };
    return babel.transform(src, transformCfg).code;
  },
};
