export default ({ outputPath, port, host, proxy }) => ({
  contentBase: outputPath,
  https: false,
  historyApiFallback: true,
  compress: true,
  host,
  port,
  disableHostCheck: true,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
  },
  proxy,
});