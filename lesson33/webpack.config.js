const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	],
	devServer: {
		port: 4200
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.s[ac]ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
		]
	}
};
