const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules:[
			{
				test: /\.js$/,
				use: 'babel-loader'
			}
		]
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
//		new HtmlWebpackPlugin()
	],
	resolve: {
		extensions: ['.js'],
		modules: [
			path.resolve(__dirname, "src/lib"),
			path.resolve(__dirname, "node_modules"),
			'node_modules'
		]
	}
};
