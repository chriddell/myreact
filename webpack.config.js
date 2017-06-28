const path 							= require('path');
const webpack 					= require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	entry: {
		filename: './index.js'
	},

	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: '/node_modules/',
				loader: 'babel-loader',
				query: {
					presets: [ 'es2015', 'react' ]
				}
			}
		]
	},

	plugins: [
		// Uglify
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.DefinePlugin({ // http://bit.ly/2t0v9aR
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),

		// Extract HTML & CSS
		new HtmlWebpackPlugin({ template: './src/index.html' }),
	]
};
