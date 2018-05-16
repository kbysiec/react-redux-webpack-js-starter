const path = require("path");

const projectConfigPaths = {
    root: path.resolve(__dirname, ".."),
    src: path.resolve(__dirname, "../src"),
    dist: path.resolve(__dirname, "../dist"),
};

const projectConfigVars = {};
const projectConfigVarsDefaults = {
    isDev: true,
    isProd: false,
    useBabelPolyfill: true,
    useSourceMaps: true,
    useAwesomeLoader: false,
    supportedBrowsers: [">0.25%", "not ie 11"],
};

const configure = function(env) {
    Object.assign(projectConfigVars, {
        isDev: env.dev ? env.dev == "true" : projectConfigVarsDefaults.isDev,
        isProd: env.prod ? env.prod == "true" : projectConfigVarsDefaults.isProd,
        useBabelPolyfill: env.babelPolyfill ? env.babelPolyfill == "true" : projectConfigVarsDefaults.useBabelPolyfill,
        useSourceMaps: env.sourceMaps ? env.sourceMaps == "true" : projectConfigVarsDefaults.useSourceMaps,
        useAwesomeLoader: env.awesomeLoader ? env.awesomeLoader == "true" : projectConfigVarsDefaults.useAwesomeLoader,
        supportedBrowsers: env.supportedBrowsers ?
            env.supportedBrowsers.split(",").map(s => s.trim()) :
            projectConfigVarsDefaults.supportedBrowsers,
    });
    
    return {
        PATHS: projectConfigPaths,
        VARS: projectConfigVars,
    }
};

module.exports = {
    PATHS: projectConfigPaths,
    VARS: projectConfigVars,
    configure: configure,
};