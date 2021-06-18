const { resolve, join } = require('path');
const autoPrefixer = require('autoprefixer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');

const rootDirectory = resolve(__dirname, '..');

const configuration = {
  cache: true,
  entry: {
    app: join(rootDirectory, '/src/index.tsx'),
  },
  module: {
    rules: [
      {
        loader: 'html-loader',
        options: {
          sources: {
            list: [
              {
                attribute: 'src',
                tag: 'img',
                type: 'src',
              },
              {
                attribute: 'href',
                tag: 'link',
                type: 'src',
              },
            ],
          },
        },
        test: /\.html$/u,
      },
      {
        test: /\.(ts|tsx)$/u,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
              experimentalFileCaching: true,
              experimentalWatchApi: true,
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.css$/u,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoPrefixer()],
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
              outputPath: 'assets/images',
            },
          },
        ],
      },
    ],
  },
  output: {
    clean: true,
    filename: 'chunks/[name].js',
    path: join(rootDirectory, '/dist'),
    pathinfo: true,
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [join(rootDirectory, '/dist/**/*')],
      cleanStaleWebpackAssets: true,
      dry: false,
      protectWebpackAssets: true,
      verbose: false,
    }),
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      template: join(rootDirectory, 'src/index.html'),
      title: 'Project Template',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV ?? 'development',
      ),
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
    mainFields: ['browser', 'module', 'main'],
    plugins: [new TsconfigPathsPlugin()],
  },
};

module.exports = configuration;
