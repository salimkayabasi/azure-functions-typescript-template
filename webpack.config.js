const { lstatSync, readdirSync } = require('fs');
const { join, resolve, sep } = require('path');
const { ProgressPlugin } = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const fnFolder = `src${sep}functions`;
const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
  readdirSync(source).filter(name => isDirectory(join(source, name)));
const functions = getDirectories(fnFolder);
const entry = functions.reduce((result, fn) => {
  result[fn] = `./${fnFolder}/${fn}/index.ts`;
  return result;
}, {});

module.exports = {
  entry,
  target: 'node',
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name]/index.js',
    libraryTarget: 'commonjs',
  },
  stats: {
    warnings: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ProgressPlugin(),
    new CopyPlugin({
      patterns: [
        'src/functions/host.json',
        {
          from: 'local.settings.json',
          noErrorOnMissing: true,
        },
        {
          from: 'src/**/function.json',
          to({ absoluteFilename }) {
            return absoluteFilename.slice(
              absoluteFilename.indexOf(fnFolder) + fnFolder.length + 1,
            );
          },
        },
      ],
    }),
  ],
};
