const path = require("path");

module.exports = { 
    entry: "./src/index.js",
    output: {
        filename: "bundle.js", // 출력 원하는 이름
        path: path.resolve(__dirname, "dist") // 경로 지정 dist 
    }
}