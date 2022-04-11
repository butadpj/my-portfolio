const path = require('path');
const { chunksEntryPoints } = require('./utils/chunksEntryPoints');
const { getPagesTemplate } = require('./utils/getPagesTemplate');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: chunksEntryPoints,
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'js/[name].js',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: './public' }],
    }),
    ...getPagesTemplate,
  ],
};
