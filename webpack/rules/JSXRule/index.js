export default () => ({
  test: /\.jsx?/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  query: {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react'
    ],
    plugins: [
      ['@babel/plugin-transform-runtime', {
        "corejs": 2,
      }],
      ['@babel/plugin-proposal-decorators', { 'legacy': true }],
      ['@babel/plugin-proposal-class-properties', { 'loose' : true }],
      '@babel/plugin-proposal-object-rest-spread',
    ]
  }
})