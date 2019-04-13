export default ({
  outputPath,
  isProduction,
  port,
  host,
}) => ({
  path: outputPath,
  filename: 'static/js/[name].[hash].js',
  publicPath: isProduction ? '/' : `http://${host}:${port}/`,
});