import path from 'path';


export default ({ isProduction, srcPath }) => ({
  loader: 'sass-loader',
  options: {
    sourceMap: !isProduction,
    outputStyle: isProduction ? 'compressed' : 'expanded',
    includePaths: [ path.resolve(srcPath, 'styles') ],
  }
})