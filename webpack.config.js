const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = [
	{
		externals: ["react-helmet"],
		entry: {
			client: "./src/client/index.js"
		},
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "[name].js"
		},
		devServer: {
			contentBase: "./dist"
	},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader"
					}
				}
			]
		}
	},
	{
		target: "node",
		entry: {
			server: "./src/server.js"
		},
		node: {
			dns: "mock",
			fs: "empty",
			path: true,
			url: false,
			net: "empty",
		},
		output: {
			path: path.resolve(__dirname),
			filename: "[name].js"
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader"
					}
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template:  path.resolve('./index.html'),
			}),
		]
	}
];
