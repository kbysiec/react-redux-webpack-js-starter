const babel = require('@babel/core');
const jestPreset = require('babel-preset-jest');
const dynamicNodePlugin = require('babel-plugin-dynamic-import-node');

module.exports = {
  process(src, filename) {
    return babel
      .transform(src, {
        // auxiliaryCommentBefore: ' istanbul ignore next ',
        filename,
        presets: ['@babel/env', '@babel/react', jestPreset],
        plugins: ['@babel/plugin-transform-runtime', dynamicNodePlugin],
        retainLines: true,
      })
      .code.replace(
        /function\s_interop/g,
        ' /* istanbul ignore next */ function _interop',
      );
  },
};
