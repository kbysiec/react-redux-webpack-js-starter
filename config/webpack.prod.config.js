const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const AutoDllPlugin = require('autodll-webpack-plugin');

const { configure } = require('./config.vars');

module.exports = (env = {}) => {
  const { PATHS, VARS } = configure(env);
  console.dir(VARS);

  return {
    mode: 'production',
    cache: true,
    context: PATHS.root,
    entry: {
      app: [`${PATHS.src}/${PATHS.srcFilename}`],
    },
    output: {
      path: `${PATHS.dist}`,
      publicPath: `${PATHS.public}`,
      filename: 'js/[name].[hash].js',
      chunkFilename: 'js/[name].[hash].js',
      sourceMapFilename: 'map/[file].map',
    },
    stats: 'errors-only',
    devtool: 'source-map',
    resolve: {
      extensions: [
        '.js',
        '.jsx',
        '.scss',
        '.less',
        '.html',
        '.json',
      ],
      modules: ['src', 'node_modules'],
    },
    optimization: {
      namedModules: true,
      runtimeChunk: true /* "single" */,
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: VARS.sourceMaps,
        }),
        new OptimizeCSSAssetsPlugin(), // using it, source maps are not generated but css optimized
      ],
      splitChunks: {
        chunks: 'all',
        minSize: 0,
        maxAsyncRequests: Infinity,
        maxInitialRequests: Infinity,
        cacheGroups: {
          vendors: {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            reuseExistingChunk: true,
            priority: -10,
          },
          common: {
            name: 'common',
            minChunks: 2,
            reuseExistingChunk: true,
            priority: -20,
          },
        },
      },
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'eslint-loader',
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/env',
                    {
                      targets: {
                        browsers: VARS.supportedBrowsers,
                      },
                      useBuiltIns: VARS.babelPolyfill,
					  corejs: 3,
                      debug: false,
                    },
                  ],
                  '@babel/react',
                ],
                plugins: [
                  '@babel/plugin-syntax-dynamic-import',
                  '@babel/plugin-proposal-class-properties',
				  [
                    '@babel/plugin-transform-runtime',
                    {
                      corejs: 3,
                    },
                  ],
                ],
                cacheDirectory: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
              },
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: VARS.sourceMaps,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer({
                    browsers: VARS.supportedBrowsers,
                  }),
                ],
                sourceMap: VARS.sourceMaps,
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
              },
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: VARS.sourceMaps,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer({
                    browsers: VARS.supportedBrowsers,
                  }),
                ],
                sourceMap: VARS.sourceMaps,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: VARS.sourceMaps,
              },
            },
          ],
        },
        {
          test: /\.less$/,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
              },
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: VARS.sourceMaps,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer({
                    browsers: VARS.supportedBrowsers,
                  }),
                ],
                sourceMap: VARS.sourceMaps,
              },
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: VARS.sourceMaps,
              },
            },
          ],
        },
        {
          test: /\.(jpg|png|svg)$/,
          include: /img/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 30000,
                name: '[name].[ext]',
                outputPath: 'img',
              },
            },
          ],
        },
        {
          test: /\.(eot|woff|woff2|ttf|svg)$/,
          include: /font/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'font',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [`${PATHS.dist}/**/*`],
      }),
      new StyleLintPlugin({
        files: 'src/**/*.(css|scss|less)',
        failOnError: true,
      }),
      new HtmlWebpackPlugin({
        template: `${PATHS.root}/index.html`,
        filename: `${PATHS.dist}/index.html`,
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: 'report/report.html',
        openAnalyzer: false,
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
        chunkFilename: 'css/[name].[contenthash].css',
      }),
      new AutoDllPlugin({
        inject: true, // will inject the DLL bundles to index.html
        filename: '[name].[hash].js',
        path: 'js',
        entry: {
          dll: [
            '@babel/polyfill',
            'axios',
            'prop-types',
            'react',
            'react-dom',
            'react-hot-loader',
            'react-redux',
            'react-router-dom',
            'redux',
            'redux-thunk',
            'redux-logger',
          ],
        },
      }),
      new HardSourceWebpackPlugin(),
    ],
  };
};
