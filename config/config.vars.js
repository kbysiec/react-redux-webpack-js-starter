const path = require("path");

const projectConfigPaths = {
    root: path.resolve(__dirname, ".."),
    src: path.resolve(__dirname, "../src"),
    dist: path.resolve(__dirname, "../dist"),
};

const projectConfigVars = {};

const configure = function(env) {
    Object.assign(projectConfigVars, {
        isDev: env.dev == "true",
        isTest: env.test == "true",
        isProd: env.prod == "true",
        useSourceMaps: env.sourceMaps == "true",
        useAwesomeLoader: env.awesome == "true",
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