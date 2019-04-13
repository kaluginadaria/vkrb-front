import webpack from 'webpack';


export default ({ isProduction }) => new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
  },
});