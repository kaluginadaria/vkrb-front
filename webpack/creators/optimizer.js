export default ({ isProduction }) => ({
  minimize: isProduction,
  splitChunks: {
    cacheGroups: {
      default: false,
      commons: {
        test: /node_modules/,
        name: 'lib',
        enforce: true,
        chunks: 'all',
      },
    },
  },
});