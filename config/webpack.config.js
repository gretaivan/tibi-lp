const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_DIRECTORY = path.join(__dirname, '../'); // the root of your project
const PUBLIC_DIRECTORY = path.join(ROOT_DIRECTORY, 'public'); // the root of the frontend, i.e. html file

const config = {
  entry: [path.resolve(ROOT_DIRECTORY, './src/index.js')], // the main JavaScript file of the project
  output: {
    // instructions for compiling the code
    path: path.resolve(ROOT_DIRECTORY, 'dist'), // the file where the compiled code should go
    filename: 'bundle.js', // the file name of the compiled code
    publicPath: '/dist', // specifies the base path for all the assets within your application.
  },
  mode: 'development', // tells webpack to use its built-in optimizations according to the mode

  // devServer: {
  //   allowedHosts: [
  //     'host.com',
  //     'subdomain.host.com',
  //     'subdomain2.host.com',
  //     'host2.com',
  //   ],
  // },

  resolve: {
    // instructions on how to resolve modules
    modules: [path.resolve('node_modules'), 'node_modules'], // tells webpack where to look for node_modules
  },
  performance: {
    // notifies you if assets and entry points exceed a specific file limit
    hints: false,
  },
  plugins: [
    // plugins we are using to help with compiling
    new HtmlWebpackPlugin({
      // used to add the JavaScript code to the HTML
      template: path.join(PUBLIC_DIRECTORY, 'index.html'),
      // favicon: "./dist/favicon.png"
    }),
  ],
  module: {
    // helpers we want webpack to use
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, // transpile css files
      {
        test: /\.(js|jsx)$/,
        resolve: {
          extensions: [".js", ".jsx"]
        },
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader'
        }
      },
     
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      }, // transpile image files
    ],
  },
};

module.exports = config;