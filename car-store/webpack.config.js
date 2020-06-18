const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: {
		main: './index.js',
		search: './search/index.js',
		carAbout: './car-about/index.js'
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
		new HtmlWebpackPlugin({
			filename: 'search.html',
			// 'base': '/search/index.html',
			template: './search/index.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'car.about.html',
			template: './car-about/index.html'
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
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							esModule: false,
							outputPath: "fonts",
							publicPath: "fonts",
							name: "[name].[ext]"
						}
					}
				]
			},
			{
				test: /\.(jpg|png|jpeg)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							esModule: false,
							outputPath: "images",
							publicPath: "images",
							name: "[name].[ext]"
						}
					}
				]
			}
		]
	}
};