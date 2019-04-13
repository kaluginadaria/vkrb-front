import path from 'path';


export default ({ srcPath }) => ({
  app: path.resolve(srcPath, 'index.js')
});