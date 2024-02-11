const path = require("path");
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: mode,
    entry: "./src/index.js",

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },

            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use:[MiniCssExtractPlugin.loader, "css-loader"]

            }
        ]
    },

    devServer: {
        static: "src"
    },       

    // devtool: "source-map",

    plugins: [
        new MiniCssExtractPlugin({
            // exclude:path.resolve(__dirname, "node_modules"),
        })
    ],

  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "util": false
    },
    
    modules: ['.', 'node_modules']
  }
}