const { configure } = require("./config.vars");

module.exports = ((env = {}) => {
    const { PATHS, VARS } = configure(env);

    return {
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
            extensions: [".js", ".jsx", ".ts", ".tsx", ".scss", ".sass", ".less", ".html", ".json"],
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
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: [
                                    ["@babel/env", {
                                        targets: {
                                            browsers: VARS.supportedBrowsers,
                                        },
                                        useBuiltIns: VARS.useBabelPolyfill,
                                        debug: true,
                                    }],
                                ],
                                plugins: [
                                    "@babel/plugin-syntax-dynamic-import",
                                ],
                            },
                        },
                    ],
                },
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: [
                                    ["@babel/preset-env", {
                                        targets: {
                                            browsers: VARS.supportedBrowsers,
                                            useBuiltIns: VARS.useBabelPolyfill,
                                        },
                                    }],
                                ],
                                plugins: [
                                    "@babel/plugin-syntax-dynamic-import",
                                ],
                            },
                        },
                        VARS.useAwesomeLoader ?
                            {
                                loader: "awesome-typescript-loader",
                                options: {
                                    transpileOnly: true,
                                    useBabel: true,
                                    useTranspileModule: false,
                                    sourceMap: VARS.useSourceMaps,
                                },
                            } :
                            {
                                loader: "ts-loader",
                                options: {
                                    transpileOnly: true,
                                    compilerOptions: {
                                        sourceMap: VARS.useSourceMaps,
                                        // target: VARS.isDev ? "es2015" : "es5",
                                        // isolatedModules: true,
                                        // noEmitOnError: false,
                                    },
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
})();