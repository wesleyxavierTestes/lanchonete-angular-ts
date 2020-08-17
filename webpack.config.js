const path = require('path');
const glob = require('glob');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: glob.sync('./src/**/*.ts'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          cwd: __dirname,
          presets: ['@babel/preset-env']
        }
      }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
    host: 'localhost',
    port: 8080
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'src/lib', to: 'lib', globOptions: {
            ignore: [
              '**/*.ts'
            ]
          }
        },
        {
          from: 'src/views', to: 'views', globOptions: {
            ignore: [
              '**/*.ts'
            ]
          }
        },
        {
          from: 'src/css', to: 'css', globOptions: {
            ignore: [
              '**/*.ts'
            ]
          }
        },
        {
          from: 'src/index.html', to: 'index.html', globOptions: {
            ignore: [
              '**/*.ts'
            ]
          }
        },
        {
          from: 'src/favicon.ico', to: 'favicon.ico', globOptions: {
            ignore: [
              '**/*.ts'
            ]
          }
        }
      ],
    }),
  ],
};