const path = require("path")
const webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.BannerPlugin({
            // banner: '이것은 배너 입니다',
            banner: () => `빌드 날짜: ${new Date().toLocaleString()}`,
        }),
        new webpack.DefinePlugin({
            TWO: "1+1",
        })
    ],
    mode: "development",
    entry: {
        main: "./www/js/app.js",
    },
    output: {
        filename: "main.js",
        path: path.resolve("./www/dist"),
    },
    module:{
        rules:[
            {
            test:/\.js$/,
            use:[path.resolve('./www/libs/myloader.js')]
        },
        {
            test: /\.css$/, // .css 확장자로 끝나는 모든 파일
            use: ["style-loader", "css-loader"], // css-loader를 적용한다
        },
        {
            test: /\.jpeg$/, // .png 확장자로 마치는 모든 파일
            loader: "url-loader", // 파일 로더를 적용한다
            options:{
                publicPath: "./dist/",
                name:"dist/cat.jpeg?[hash]",
                limit: 500,
            },
        },
        ],
    },
}