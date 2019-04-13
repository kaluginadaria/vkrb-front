import path from 'path';

import devServer from './creators/devServer';
import entry from './creators/entry';
import output from './creators/output';
import resolver from './creators/resolver';
import optimizer from './creators/optimizer';

import SCSSRule from './rules/SCSSRule';
import JSXRule from './rules/JSXRule';
import WOFFRule from './rules/WOFFRule';
import ImgRule from './rules/ImgRule';

import htmlPlugin from './plugins/htmlPlugin';
import definePlugin from './plugins/definePlugin';
import extractCSSPlugin from './plugins/extractCSSPlugin';

import config from './config';


const { host, port, srcDir, distDir, proxy } = config;

const rootPath = path.resolve(__dirname, '../');
const isProduction = process.env.NODE_ENV === 'production';
const srcPath = path.resolve(rootPath, `./${srcDir}`);
const outputPath = path.resolve(rootPath, `./${distDir}`);


export default {
  mode: isProduction ? 'production' : 'development',

  entry: entry({ srcPath }),

  output: output({ isProduction, outputPath, port, host }),

  devtool: isProduction ? false : 'eval-source-map',

  resolve: resolver({ srcPath }),

  module: {
    rules: [
      SCSSRule({ isProduction, srcPath }),
      JSXRule(),
      WOFFRule(),
      ImgRule({ isProduction }),
    ]
  },

  optimization: optimizer({ isProduction }),

  plugins: [
    htmlPlugin({ srcPath, outputPath, isProduction }),
    definePlugin({ isProduction }),
    extractCSSPlugin({ isProduction }),
  ],

  devServer: devServer({ outputPath, port, host, proxy }),
}