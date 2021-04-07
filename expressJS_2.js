/*
    https://expressjs.com/ko/guide/routing.html
    에서 가져옴
*/

/*
    - require() 가 하는 일은 node module을 어딘가에서 가져오는 것
    : 'express'라는 이름의 폴더를 내 파일들 속에서 찾으려 할것임
    : 만약 못찾으면 그 다음엔 node_modules 안에서 찾으려고 함
    : node_modules 폴더 안을 보면 express라는 폴더가 있음
    : express 폴더 안에 index.js 가 있고...
    ** 즉, 모든게 적은 블럭단위로 구성되어있음
*/

const express = require('express'); //1. require()로 express 불러오기(import)
const app = express(); //2. express를 실행
//:: const 로 선언한 변수 app에 express를 실행해서 담은 것

const PORT = 4000;

function handleListening(){
    console.log(`Listening on http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
/*
    1. 위 상태에서 - 터미널 입력 :::: node expressJS_2.js 입력 > 아무런 반응 없음
    2. localhost:4000 으로 접속 > cannot GET / 이라고 뜸 (:expressJS_2.js 를 가져올 수 없다는 뜻)
    - 연결은 됐지만 서버로부터 에러를 받은 것.
    - root(/)에 아무것도 표시할 게 없다는 뜻
*/

/*
----------------------------------------------
매번 expressJS_2.js를 node 로 실행하고 싶지 않아서

**package.json을 중앙 컨트롤 타워처럼 만들거임

package.json 에 가서 입력

"scripts":{
    "start": "node expressJS_2.js"
}

이렇게 설정을 해주면 start를 입력할 때마다
node expressJS_2.js를 실행하게 됨

npm start 를 입력해주면 node expressJS_2.js 를 입력한 것과 같이
명령이 실행됨

package.json에 설정해둠으로써 프로젝트 동료도
npm start 로 node expressJS_2.js 를 실행시킬 수 있음

*/

/*
    최종 정리
    - express를 호출 (node_modules에서 import)
    - 실행
    - app(변수)에게 4000번 포트를 listen 하라고 시키기
    - listening 이 시작할때, handleListening 이라는 함수를 호출
*/