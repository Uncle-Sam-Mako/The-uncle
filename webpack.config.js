
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');



module.exports = (env, argv) => {

  const MODE = argv.mode || 'development';

  return{
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "bundle.js", // the name of the bundle
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"), // to import index.html file inside index.js
    }),
    new webpack.ProvidePlugin({ // <-- this plugin makes React available as a global variable, so you don't need to import it in every file  
      React : 'react',
    }),
    new webpack.DefinePlugin({ 
      'process.env': { 
          NODE_ENV: JSON.stringify('production') 
      }, 
      'process': { // define process global variable 
          env: { NODE_ENV: JSON.stringify('production') } 
      } 
    }),
    new WorkboxPlugin.GenerateSW({
        // these options encourage the ServiceWorkers to get in there fast
        // and not allow any straggling "old" SWs to hang around
        clientsClaim: true,
        skipWaiting: true,
        maximumFileSizeToCacheInBytes: 5000000
    }),
    new CopyWebpackPlugin({
      patterns : [
      { from: 'public/images', to: 'images' },
      { from: 'public/manifest', to: 'manifest' }
    ]}),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 3030, // you can change the port
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
  
};
}