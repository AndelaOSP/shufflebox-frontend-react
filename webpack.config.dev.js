import webpack from 'webpack';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export default {
  debug: true,
  devtool: "inline-source-map",
  noInfo: false,
  entry: [
    "eventsource-polyfill", // necessary for hot reloading with IE
    "webpack-hot-middleware/client?reload=true", //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, "src/index")
  ],
  target: "web",
  output: {
    path: __dirname + "/dist", // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "src")
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'TOKEN': JSON.stringify(process.env.TOKEN)
      }
    })
  ],
  module: {
    rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }],
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, "src"),
        loaders: ["babel"]
      },
      { test: /(\.css)$/, loaders: ["style", "css"] },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000" },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      },
      {
        test: /\.(png|jpg|)$/,
        loader: "url-loader?limit=200000"
      },
      {test: /(\.scss)$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "image-webpack-loader",
        options: {
          query: {
            mozjpeg: {
              progressive: true
            },
            gifsicle: {
              interlaced: true
            },
            optipng: {
              optimizationLevel: 7
            }
          }
        }
      }
    ]
  }
};
