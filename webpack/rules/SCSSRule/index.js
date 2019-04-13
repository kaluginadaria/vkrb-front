import extractCssLoader from './extractCssLoader';
import cssLoader from './cssLoader';
import postCssLoader from './postCssLoader';
import scssLoader from './scssLoader';


export default ({ isProduction, srcPath }) => ({
  test: /\.s?css$/,
  exclude: /node_modules/,
  use: [
    extractCssLoader(),
    cssLoader({ isProduction }),
    postCssLoader({ isProduction }),
    scssLoader({ isProduction, srcPath })
  ],
});