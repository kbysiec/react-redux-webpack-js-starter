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
      app: [`${PATHS.src}/${PATHS.srcFilename}`],
    },
    output: {
      path: `${PATHS.dist}`,
      publicPath: `${PATHS.public}`,
      filename: 'js/[name].[hash].js',
      chunkFilename: 'js/[name].[hash].js',
    },
    watch: true,
    stats: 'minimal',
    devtool: 'eval-source-map',
    devServer: {
      port: 9000,
      hot: true,
      hotOnly: true,
      historyApiFallback: true,
      overlay: true,
    },
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
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
    optimization: {
      namedModules: true,
      runtimeChunk: true /* "single" */,
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
                  'react-hot-loader/babel',
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
            'style-loader',
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
            'style-loader',
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
            'style-loader',
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
          NODE_ENV: JSON.stringify('development'),
        },
      }),
      new webpack.HotModuleReplacementPlugin({}),
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin({
        template: `${PATHS.root}/index.html`,
      }),
      new StyleLintPlugin({
        files: 'src/**/*.(css|scss|less)',
      }),
      ...(VARS.dashboard ? [new DashboardPlugin()] : []),
    ],
  };
};
