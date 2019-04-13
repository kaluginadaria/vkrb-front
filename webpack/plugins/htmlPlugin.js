import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';


export default ({ srcPath, outputPath, isProduction }) => new HtmlWebpackPlugin({
  filename: path.resolve(outputPath, 'index.html'),
  template: path.resolve(srcPath, 'index.ejs' ),
  title: '',
  inject: true,
  isProduction,
  chunksSortMode: (chunk1, chunk2) => {
    const order = ['lib', 'app'];
    const order1 = order.indexOf(chunk1.names[0]);
    const order2 = order.indexOf(chunk2.names[0]);
    return order1 - order2;
  },
});