const path = require('path');

const projectConfigPaths = {
  root: path.resolve(__dirname, '..'),
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
  public: '',
  srcFilename: 'index.jsx',
};

const projectConfigVars = {};
const projectConfigVarsDefaults = {
  dashboard: false,
  babelPolyfill: 'entry',
  sourceMaps: true,
  supportedBrowsers: ['>0.25%'],
};

const configure = function(env) {
  Object.assign(projectConfigVars, {
    dashboard: env.dashboard
      ? env.dashboard == 'true'
      : projectConfigVarsDefaults.dashboard,
    babelPolyfill: env.babelPolyfill
      ? env.babelPolyfill
      : projectConfigVarsDefaults.babelPolyfill,
    sourceMaps: env.sourceMaps
      ? env.sourceMaps == 'true'
      : projectConfigVarsDefaults.sourceMaps,
    supportedBrowsers: env.supportedBrowsers
      ? env.supportedBrowsers.split(',').map(s => s.trim())
      : projectConfigVarsDefaults.supportedBrowsers,
  });

  return {
    PATHS: projectConfigPaths,
    VARS: projectConfigVars,
  };
};

module.exports = {
  PATHS: projectConfigPaths,
  VARS: projectConfigVars,
  configure,
};
