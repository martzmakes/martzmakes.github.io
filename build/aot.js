const path = require('path');
const { CommonsChunkPlugin } = require('webpack').optimize;
const { AotPlugin } = require('@ngtools/webpack');
const nodeModules = path.join(process.cwd(), 'node_modules');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = function () {
  return {
    plugins: [
      new AotPlugin({
        "mainPath": "main.ts",
        "hostReplacementPaths": {
          "environments/environment.ts": "environments/environment.ts"
        },
        "exclude": [],
        "tsConfigPath": "src/tsconfig.app.json"
      }),
      new CommonsChunkPlugin({
        "name": "inline",
        "minChunks": null
      }),
      new CommonsChunkPlugin({
        "name": "vendor",
        "minChunks": (module) => module.resource && module.resource.startsWith(nodeModules),
        "chunks": [
          "main"
        ]
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer'
      })
    ],

    entry: {
      "main": [
        "./src/main.ts"
      ],
      "polyfills": [
        "./src/polyfills.ts"
      ],
      "styles": [
        "./src/styles.scss"
      ]
    },

    output: {
      "path": path.join(process.cwd(), "dist"),
      "filename": "[name].bundle.js",
      "chunkFilename": "[id].chunk.js"
    }
  };
};
