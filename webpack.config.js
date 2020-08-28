const path = require('path');
const glob = require('glob');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDevelopment = true;

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
        test: /\.module\.s(a|c)ss$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
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
    extensions: ['.tsx', '.ts', '.js', '.scss']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist/dev/'),
    host: 'localhost',
    port: 8081,
    // writeToDisk: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    }),
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