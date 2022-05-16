import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3005,
    static: ['./public', './pages'],
    compress: true,
    hot: 'only',
    open: true,
  },
});
