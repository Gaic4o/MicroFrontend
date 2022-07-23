# CSS Loader

CSS 파일 로더는 기본적으로 - HTML 문서 <head> 영역에 인터널 (internal) 스타일 방식으로 스타일 코드를 추가 합니다.

저번에는 JS Loader 를 해서 - import, export 엮어진 모든 js 들을 하나 또는 소수의 파일로 묶습니다.
import, require 로 css 기타 image, html 또는 font file 을 묶을 수 있습니다.

``` javascript
npm i -D style-loader css-loader  
```

css-loader 가 css 파일들을 읽어주고, style-loader 는 읽은 css 파일을 style 태그로 만들어 head 태그 안에 넣어줍니다.

``` javascript
{
    module: {
        rules: [{
            // 전 시간 babel-loader 
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }]
    }
}
```

만일 style 태그 대신 css 파일로 만들고 싶은 경우 mini-css-extract-plugin 을 사용하면 됩니다.
use 를 사용하는 이유는 - 동시에 여러 개의 로더를 사용 할 떄 use를 사용합니다.

style-loader 과 css-loader 처럼 두 개를 한 번에 사용할 수 있습니다. - use 
나중에 less-loader, sass-loader, postcss-loader 함꼐 3 ~ 4개를 동시에 사용하기도 합니다.



여러 css 를 하나의 css 파일로 합치는 방법을 무엇일까요~?
mini-css-extract-plugin 을 사용하면 됩니다.

``` javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
```

style-loader 를 대체하지만, 플러그인만큼 module과 plugins 에 모두 써줘야 합니다.

``` javascript
{
    module: {
        rules: [{
            // 전 시간 babel-loader 
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }],
    },
    plugins: [
        // 기타 플러그인.
        new MiniCssExtractPlugin({ filename: 'app.css' });
    ]
}
```


css-loader 에서 처리한 결과물을 받아 filename 에 적힌 파일명으로 만들어 줍니다.
webpack 을 실행하면, output 에서 설정한 path 경로에 app.css 파일이 생깁니다.
그 파일을 기존에 css 를 넣던 방식대로 link 태그로 head 에 넣어주면 됩니다.




npm i -d file-loader url-loader 


file-loader 는 특정 파일을 그대로 내보내줍니다.
아무리 그래도 png 랑, js 랑 합치다는 것은 말이 안됩니다.

웹팩도 한계가 있습니다.
url-loader 가 좀 특이 합니다.

- 설정한 사이즈보다 작은 이미지나, 폰트 파일을 인라인화 합니다.

이미지랑, 폰트를 어떻게 인라인화 하는가?, base64 로 인코딩하면 됩니다. 
data-uri 라고 합니다.

작은 파일을 따로 http 요청을 하느니, 그냥 문자열로 인코딩해 불러오겠다는 지책.


``` javascript
{
    module: {
        rules: [{
            // 바벨로더의 css 로더들.
        }, {
            test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader',
            options: {
                name: '[hash].[ext]',
                limit: 10000, 
            }
        }]
    }
}
```

limit(바이트 단위)보다 작은 파일은 base64 인코딩해서 인라인화 합니다.
name 에서는 지난 시간 output 처럼 [hash], [name] 등을 쓸 수 있습니다.
[ext] 는 현재 확장자를 그대로 하겠다는 뜻.

