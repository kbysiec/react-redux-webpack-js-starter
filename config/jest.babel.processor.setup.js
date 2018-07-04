const babel = require('@babel/core');
const jestPreset = require('babel-preset-jest');

module.exports = {
  process(src, filename) {
    // const transformCfg = {
    //   presets: ['@babel/env', '@babel/react', jestPreset],
    //   plugins: ["@babel/plugin-transform-runtime", istanbul],
    //   retainLines: true,
    // };
    // return babel.transform(src, transformCfg).code;

    return babel
      .transform(src, {
        // auxiliaryCommentBefore: ' istanbul ignore next ',
        filename,
        presets: ['@babel/env', '@babel/react', jestPreset],
        plugins: ['@babel/plugin-transform-runtime'],
        retainLines: true,
      })
      .code.replace(
        /function\s_interop/g,
        ' /* istanbul ignore next */ function _interop',
      );
  },
};
