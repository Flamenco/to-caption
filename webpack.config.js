import { fileURLToPath } from 'node:url'

export default {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: fileURLToPath(new URL('./dist', import.meta.url)),
    filename: 'toCaption.js',
    library: {
      name: 'toCaption',
      type: 'umd',
      export: 'default',
    },
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
}
