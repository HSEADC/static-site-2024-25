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
        test: /\.(woff2?|ttf|otf|eot)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][hash][ext][query]",
        },
      },
  
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
      template: './src/articles.html',
      filename: './articles.html'
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
      template: './src/quiz.html',
      filename: './quiz.html'
    }),

    // Страницы разделов
    new HtmlWebpackPlugin({
      template: './src/catalog.html',
      filename: './catalog.html'
    }),

    // Страницы разделов
    new HtmlWebpackPlugin({
      template: './src/all_quiz.html',
      filename: './all_quiz.html'
    }),

   // Страницы разделов
        new HtmlWebpackPlugin({
          template: './src/quiz2.html',
          filename: './quiz2.html'
        }),

            // Страницы разделов
    new HtmlWebpackPlugin({
      template: './src/quiz3.html',
      filename: './quiz3.html'
    }),

            // Страницы разделов
            new HtmlWebpackPlugin({
              template: './src/profile.html',
              filename: './profile.html'
            }),

    new HtmlWebpackPlugin({
      template: './src/moscow.html',
      filename: './moscow.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/kazan.html',
      filename: './kazan.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/harrypotter.html',
      filename: './articles/harrypotter.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/harrypotter2.html',
      filename: './articles/harrypotter2.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/friends.html',
      filename: './articles/friends.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/friends2.html',
      filename: './articles/friends2.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/totoro.html',
      filename: './articles/totoro.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/totoro2.html',
      filename: './articles/totoro2.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/shrek.html',
      filename: './articles/shrek.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/shrek2.html',
      filename: './articles/shrek2.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/turtles.html',
      filename: './articles/turtles.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/harrypotter3.html',
      filename: './articles/harrypotter3.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/totoro3.html',
      filename: './articles/totoro3.html'
    }),


  ],
  
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}