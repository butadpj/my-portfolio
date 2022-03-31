const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './src/js/app.js',
    parallax: './src/js/parallax.js',
    collapsible: './src/js/collapsible.js',
    projectDetails: './src/js/projectDetails.js',
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: './js/[name].bundle.js',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: './public' }],
    }),
  ],
};
