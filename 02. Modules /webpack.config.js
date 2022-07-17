const path = require('path'); 

module.exports = {
    entry: "./main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"), 
    }
} // npm 저장소로 초기화 해야 실행 가능 합니다.