const path = require("path");

module.exports = { 
    entry: "./src/index.js",
    output: {
        filename: "bundle.js", // 출력 원하는 이름
        path: path.resolve(__dirname, "dist") // 경로 지정 dist 
    },
    module: {
        rules: [ // 이 2개가 일치해야 - 파일형식이 무엇인지 정의합니다.
            {
                test: /.css$/,
                use: [
                { loader: "style-loader" },
                { loader: "css-loader", options: { modules: true } }  ],
                // use: ["style-loader", "css-loader"] // 왼쪽에서 오른쪽으로 실행 됩니다.
            }
        ]
    }
}