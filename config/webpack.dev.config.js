const commonConfig = require("./webpack.common.config.js");
const webpack = require("webpack");
const merge = require("webpack-merge");
const autoprefixer = require("autoprefixer");
const DashboardPlugin = require("webpack-dashboard/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { configure } = require("./config.vars");

module.exports = ((env = {}) => {
    const { PATHS, VARS } = configure(env);

    const developmentConfig = {
        mode: "development",
        entry: {
            app: [
                // "react-hot-loader/patch",
                `${PATHS.src}/index.js`
            ]
        },
        watch: true,
        devtool: "eval-source-map",
        devServer: {
            port: 9000,
            hot: true,
            hotOnly: true,
            historyApiFallback: true,
            overlay: true,
        },
        optimization: {
            namedModules: true,
        },
        module: {
            rules: [
                {
                    test: /\.(scss|sass)$/,
                    exclude: /node_modules/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: VARS.useSourceMaps,
                            },
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: [
                                    autoprefixer({
                                        browsers: VARS.supportedBrowsers,
                                    })
                                ],
                                sourceMap: VARS.useSourceMaps,
                            },
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: VARS.useSourceMaps,
                            },
                        },
                    ],
                },
                {
                    test: /\.less$/,
                    exclude: /node_modules/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: VARS.useSourceMaps,
                            },
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: [
                                    autoprefixer({
                                        browsers: VARS.supportedBrowsers,
                                    })
                                ],
                                sourceMap: VARS.useSourceMaps,
                            },
                        },
                        {
                            loader: "less-loader",
                            options: {
                                sourceMap: VARS.useSourceMaps,
                            },
                        },
                    ],
                },
            ],
        },
        plugins:[
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify("development"),
                },
            }),
            new DashboardPlugin(),
            new webpack.HotModuleReplacementPlugin({
            }),
            new HtmlWebpackPlugin({
                template: `${PATHS.root}/index.html`,
            }),
        ],
    };


    if (VARS.isDev){
        const merged = merge(commonConfig, developmentConfig);
        console.dir(merged.module.rules);
        return merged;
    }
    else {
        throw new Error("To use dev config set env.dev=true in npm inline script!");
    }
})();