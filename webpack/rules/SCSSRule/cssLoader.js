export default ({ isProduction }) => ({
  loader: 'css-loader',
  options: {
    sourceMap: !isProduction,
    modules: true,
    localIdentName: isProduction ? '[hash:base64]' : '[path][name]__[local]',
    importLoaders: 2,
  }
});