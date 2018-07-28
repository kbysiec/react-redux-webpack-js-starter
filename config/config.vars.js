const path = require('path');

const projectConfigPaths = {
  root: path.resolve(__dirname, '..'),
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
  srcFilename: 'index.jsx',
};

const projectConfigVars = {};
const projectConfigVarsDefaults = {
  useDashboard: false,
  useBabelPolyfill: 'entry',
  useSourceMaps: true,
  supportedBrowsers: ['>0.25%'],
};

const configure = function(env) {
  Object.assign(projectConfigVars, {
    useDashboard: env.useDashboard
      ? env.useDashboard == 'true'
      : projectConfigVarsDefaults.useDashboard,
    useBabelPolyfill: env.useBabelPolyfill
      ? env.useBabelPolyfill
      : projectConfigVarsDefaults.useBabelPolyfill,
    useSourceMaps: env.useSourceMaps
      ? env.useSourceMaps == 'true'
      : projectConfigVarsDefaults.useSourceMaps,
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
