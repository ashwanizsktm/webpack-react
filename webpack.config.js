const path = require("path");
const mode = process.env.NODE_ENV === "production" ? "production" : "development"

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
            }
        ]
    },

    devServer: {
        static: "dist"
    },       

    // devtool: "source-map",

  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "util": false
    }
  }
}