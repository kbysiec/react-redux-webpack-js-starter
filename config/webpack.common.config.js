const { PATHS, VARS } = require("./config.vars");

module.exports = {
    mode: "none",
    cache: true,

    context: PATHS.root,

    entry: {
        app: [
        ],
    },
    output: {
        path: `${PATHS.dist}/js`,
        publicPath: "/",
        filename: "[name].js",
        chunkFilename: "chunk-[id].js",
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".scss", ".less", ".html", ".json"],
        modules: ["src", "node_modules"],
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 10000,
            maxAsyncRequests: 2,
            maxInitialRequests: 2,
            automaticNameDelimiter: '.',
        },
        runtimeChunk: true, /* "single" */
    },
    module:{
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                ["@babel/preset-env", {
                                    targets: {
                                        browsers: [
                                            ">0.25%",
                                            "not ie 11",
                                        ],
                                        useBuiltIns: true,
                                    },
                                }],
                            ],
                            plugins: [
                                "@babel/plugin-syntax-dynamic-import",
                            ],
                        },
                    },
                ],
            },
        ],
    },
// plugins: [
//     new HtmlWebpackPlugin({
//         template: `${PATHS.root}/index.html`,
//         filename: `${PATHS.dist}/index.html`,
    //     }),
    // ],
};