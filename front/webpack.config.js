const path = require("path")
const outputDir = path.resolve(__dirname, "./docs")

module.exports = {
	entry: "./src/index.tsx",
	output: {
		path: outputDir,
		filename: "index.js"
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env", "@babel/preset-react"]
				}
			},
			{
				test: /\.tsx?$/,
				exclude: /(node_modules)/,
				loader: "ts-loader",
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	devServer: {
		static: {
			directory: outputDir,
		},
		proxy: {
			"/api": "http://localhost:8081"
		},
		historyApiFallback: true,
		compress: true,
		host: "0.0.0.0",
		port: 8080
	}
}
