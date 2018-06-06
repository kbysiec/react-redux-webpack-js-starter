const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const { configure } = require('./config.vars');

module.exports = (env = {}) => {
  const { PATHS, VARS } = configure(env);
  console.dir(VARS);

  return {
    mode: 'development',
    cache: true,
    context: PATHS.root,
    entry: {
      app: [
        `${PATHS.src}/index.js`,
      ],
    },
    output: {
      path: `${PATHS.dist}`,
      publicPath: '',
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js',
    },
    watch: true,
    devtool: 'eval-source-map',
    devServer: {
      port: 9000,
      hot: true,
      hotOnly: true,
      historyApiFallback: true,
      overlay: true,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.less', '.html', '.json'],
      modules: ['src', 'node_modules'],
    },
    optimization: {
      namedModules: true,
      runtimeChunk: true /* "single" */,
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
                plugins: [
                  '@babel/plugin-syntax-dynamic-import',
                  'react-hot-loader/babel',
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
                plugins: [
                  '@babel/plugin-syntax-dynamic-import',
                  'react-hot-loader/babel',
                ],
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
            'style-loader',
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
            'style-loader',
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
            'style-loader',
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
      new DashboardPlugin(),
      new webpack.HotModuleReplacementPlugin({}),
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin({
        template: `${PATHS.root}/index.html`,
      }),
      new StyleLintPlugin({
        files: 'src/**/*.(css|scss|less)',
      }),
    ],
  };
};
