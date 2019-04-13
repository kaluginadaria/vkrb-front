export default ({ isProduction }) => ({
  test: /\.(jpg|jpeg|png|svg)/,
  exclude: /node_modules/,
  loader: 'url-loader',
  query: {
    limit: 1024 * 3,
    name: `static/img/[name]${isProduction ? '.[hash]' : ''}.[ext]`,
  }
});
