const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
module.exports = (env, argv) => {
  const SERVER_PATH = (argv.mode === 'production') ?
    './src/server/server-prod.js' :
    './src/server/server-dev.js'
return ({
    entry: {
      server: SERVER_PATH,
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].js'
    },
    target: 'node',
    node: {
      // Precisa disso ao trabalhar com express, caso contrário, a compilação falha
      __dirname: false,   // se você não colocar isto é, __dirname
      __filename: false,  // e __filename retornam em branco ou "/"
    },
    externals: [nodeExternals()], // É necessário para evitar erros ao trabalhar com o Express
    module: {
      rules: [
        {
          // Transpila ES6-8 into ES5
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  })
}