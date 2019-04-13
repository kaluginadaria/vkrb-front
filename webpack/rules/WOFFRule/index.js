export default () => ({
  test: /\.woff2?/,
  exclude: /node_modules/,
  loader: 'url-loader',
  query: {
    limit: 5 * 1024,
    name: `static/fonts/[name].[ext]`,
    publicPath: '/',
  }
});