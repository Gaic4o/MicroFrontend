loadsh 로 빌드를 하면, 번들 로그가 생성됩니다.
dist 에 생긴 파일을 index.html 에 index.js 가 아닌 bundle.js 링크 걸어주기.

문제는 버튼을 클릭하면 한 가지 문제가 있었는데, 아무 것도 작동하지 않습니다.

webpack 이 하는 일은 자체의 전체 범위를 생성하여 모든,
브라우저에서 실행 중인 다른 것들, 실제로 어떤 파일과도 충돌을 일으키지 않도록 하는 좋은 접근 방식 입니다.

다양한 모듈이 있습니다.

CommonJS - (Require) - 필수 키워드를 사용하는 모듈.
EcmaScript 2015 (import / Export) - import, export Emacs 2015 형식. 
AMD Deline / Require - 정의 및 획득한 AMD 
@import CSS / Scss - 코드 및 액세서에는 ACT 가져오기 형식이 있으며 이는 모듈 개념을 따릅니다. 
Image URL reference - 이미지 참조를 위한 모듈 개념도 가질 수 있습니다.



