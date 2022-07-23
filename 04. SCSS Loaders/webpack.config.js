const path = require("path");

module.exports = { 
    entry: "./src/index.js",
    output: {
        filename: "bundle.js", // 출력 원하는 이름
        path: path.resolve(__dirname, "dist") // 경로 지정 dist 
    },
    module: {
        rules: [ 
            {
                test: /\.(css)$/,
                use: [
                { loader: "style-loader" },
                { loader: "css-loader", options: { modules: true } }  ],
            },
            {
                test: /.s[ac]ss$/,
                use: [
                    // Creates 'style' nodes from JS strings
                    { loader: 'style-loader' },
                    // Translates CSS into CommonJS 
                    { loader: 'css-loader', options: { modules: true } },
                    // Compiles Sass to CSS 
                    { loader: 'sass-loader' }, 
                ]
            }
        ]
    }
}

// css-loader 
// style-loader
// sass-loader 
// 모든 스타일을 DOM 에 즉시 적용하거나, mini-css-extract-plugin 의 별도의 파일로 추출합니다.

