const path = require("path");

const projectConfigPaths = {
    root: path.resolve(__dirname, ".."),
    src: path.resolve(__dirname, "../src"),
    dist: path.resolve(__dirname, "../dist"),
};

const projectConfigVars = {};

const configure = function(env) {
    const useTs = env.ts == "true";

    Object.assign(projectConfigPaths, {
        appEntry: useTs ? path.resolve(__dirname, "../src/index.tsx")
            : path.resolve(__dirname, "../src/index.js"),
    });

    Object.assign(projectConfigVars, {
        isDev: env.dev == "true",
        isTest: env.test == "true",
        isProd: env.prod == "true",
        useTs: useTs,
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