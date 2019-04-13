import path from 'path';


export default ({ srcPath }) => ({
  modules: [ path.resolve(srcPath, '../node_modules'), srcPath ],
  extensions: ['.js', '.jsx'],
})