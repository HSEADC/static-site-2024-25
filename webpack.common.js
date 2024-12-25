const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|svg|jpg|jpeg|webp)/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),

    // Страницы разделов
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html'
    }),
    // Страницы разделов
    new HtmlWebpackPlugin({
      template: './src/main.html',
      filename: './main.html'
    }),
    // Страницы разделов
    new HtmlWebpackPlugin({
      template: './src/styleguide.html',
      filename: './styleguide.html'
    }),
    // Страницы разделов
     new HtmlWebpackPlugin({
      template: './src/help.html',
      filename: './help.html'
    }),
    // Страницы разделов
    new HtmlWebpackPlugin({
      template: './src/catalog.html',
      filename: './catalog.html'
    }),
  // Страницы разделов
    new HtmlWebpackPlugin({
      template: './src/articles/petersburg.html',
      filename: './articles/petersburg.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/london.html',
      filename: './articles/london.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/moscow.html',
      filename: './articles/moscow.html'
    }),

  ],
  
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}