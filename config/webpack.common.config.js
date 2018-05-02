const { PATHS } = config = require("./config.vars");

module.exports = {
    mode: "none",
    context: PATHS.root,
    entry: {
        app: [
        ]
    },
    output: {
        path: PATHS.dist,
        publicPath: '/',
        chunkFilename: 'chunk.[id].js',
    },
};