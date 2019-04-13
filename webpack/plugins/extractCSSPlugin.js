import MiniCssExtractPlugin from 'mini-css-extract-plugin';


export default ({ isProduction }) => {
  return new MiniCssExtractPlugin({
    filename: `static/css/[name]${isProduction ? '.[hash]' : ''}.css`,
    chunkFilename: isProduction ? '[id].[hash].css' : '[id].css',
  });
}