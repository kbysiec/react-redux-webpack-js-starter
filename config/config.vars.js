const path = require('path');

const projectConfigPaths = {
  root: path.resolve(__dirname, '..'),
  src: path.resolve(__dirname, '../src-ts'),
  dist: path.resolve(__dirname, '../dist'),
};

const projectConfigVars = {};
const projectConfigVarsDefaults = {
  useDashboard: false,
  useBabelPolyfill: 'entry',
  useSourceMaps: true,
  useAwesomeLoader: false,
  supportedBrowsers: ['>0.25%'],
};

const configure = function(env) {
  Object.assign(projectConfigVars, {
    useDashboard: env.dashboard
      ? env.dashboard == 'true'
      : projectConfigVarsDefaults.useDashboard,
    useBabelPolyfill: env.babelPolyfill
      ? env.babelPolyfill
      : projectConfigVarsDefaults.useBabelPolyfill,
    useSourceMaps: env.sourceMaps
      ? env.sourceMaps == 'true'
      : projectConfigVarsDefaults.useSourceMaps,
    useAwesomeLoader: env.awesomeLoader
      ? env.awesomeLoader == 'true'
      : projectConfigVarsDefaults.useAwesomeLoader,
    supportedBrowsers: env.supportedBrobabelPolyfillwsers
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
