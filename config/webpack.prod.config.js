const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

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
      publicPath: '',
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js',
      sourceMapFilename: 'map/[file].map',
    },
    devtool: 'source-map',
    resolve: {
      extensions: [
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
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
          sourceMap: VARS.useSourceMaps, // set to true to have js source maps
        }),
        new OptimizeCSSAssetsPlugin(), // using it source maps are not generated but css optimized
      ],
      splitChunks: {
        minSize: 10000,
        maxAsyncRequests: 2,
        maxInitialRequests: 2,
        cacheGroups: {
          vendors: {
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            reuseExistingChunk: true,
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
          enforce: 'pre',
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'tslint-loader',
            options: {
              failOnHint: true,
              emitErrors: false,
            },
          },
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
                      useBuiltIns: VARS.useBabelPolyfill,
                      debug: false,
                    },
                  ],
                  '@babel/react',
                ],
                plugins: ['@babel/plugin-syntax-dynamic-import'],
                cacheDirectory: true,
              },
            },
          ],
        },
        {
          test: /\.tsx?$/,
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
                      useBuiltIns: VARS.useBabelPolyfill,
                      debug: false,
                    },
                  ],
                ],
                plugins: ['@babel/plugin-syntax-dynamic-import'],
                cacheDirectory: true,
              },
            },
            VARS.useAwesomeLoader
              ? {
                  loader: 'awesome-typescript-loader',
                  options: {
                    transpileOnly: true,
                    useBabel: true,
                    useTranspileModule: false,
                    sourceMap: VARS.useSourceMaps,
                  },
                }
              : {
                  loader: 'ts-loader',
                  options: {
                    transpileOnly: true,
                    compilerOptions: {
                      sourceMap: VARS.useSourceMaps,
                    },
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
                sourceMap: VARS.useSourceMaps,
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
                sourceMap: VARS.useSourceMaps,
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
                sourceMap: VARS.useSourceMaps,
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
                sourceMap: VARS.useSourceMaps,
              },
            },
            {
              loader: 'sass-loader',
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
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
              },
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: VARS.useSourceMaps,
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
                sourceMap: VARS.useSourceMaps,
              },
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: VARS.useSourceMaps,
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
      new CleanWebpackPlugin([`${PATHS.dist}/**/*`], {
        root: PATHS.root,
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
        filename: 'css/[name].css',
        chunkFilename: 'css/[name].css',
      }),
      // new HardSourceWebpackPlugin(),
    ],
  };
};
