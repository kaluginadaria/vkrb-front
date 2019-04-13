import autoprefixer from 'autoprefixer';


export default ({ isProduction }) => ({
  loader: 'postcss-loader',
  options: {
    plugins: [
      autoprefixer({
        browsers: [
          'ie >= 10',
          'last 4 versions',
        ],
      })
    ],
    sourceMap: !isProduction,
  }
})