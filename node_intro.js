/*
    Node.js 사용
    - 백엔드, 서버에 사용한다.
    - 프론트와 백엔드 모두 JS 를 사용할때 Node.js 를 사용
    - 많은 데이터를 사용해야할때 Nodejs 사용이 PHP 보다 좋음(실시간 같은거)
*/

/*
    누가 Node.js 를 사용할까?
    - Paypal, Uber, 넷플릭스
*/

/*
    (강의 댓글 참조)
    소프트웨어인 서버 : 인터넷에 연결 된 한덩어리의 코드.. 일종의 네트워크에 연결된 것.
    내가 url에 접속하거나 하면 기다렸다가 홈페이지 등을 저장했다가 나한테 쏴주는 곳이 바로 서버임
    public 할 수도 있고 private하게 구축할 수도 있는 거임
*/

/*
    express js
    - 프레임워크 (아주아주 긴 코드를 짧게 줄인거지 뭐)
    - 몇줄의 코드로 서버를 만들수 있게 해줌
*/
console.log("hi");
/*
    NPM (Node package manager)
    - 각자의 패키지를 저장하는 node.js의 중심 같은 곳
    - 패키지를 다운로드하고 업데이트하고 지우는 걸 여기서 다 할 수 있...?
    - npm은 node.js 를 다운로드 받으면 따라오는 거라서 따로 설치가 필요하지 않음
*/

/*
    Package manager 로 npm을 사용하려면 npm이 정한 방식으로 프로젝트를 시작해야함
    [terminal 에 작성]
    - npm init -> npm이 질문하기 시작함
    - 작성완료시 package.json 생성완료!
*/

/*
    json은 js에서 정보를 담는 방식
*/

/*
    express.js 설치하기
    * npm을 실행할 때는 꼭 프로젝트 폴더에 package.json 이 있는 폴더에서 실행해야함
    *  package.json 이 없는 외부에서 실행시, package.json을 읽지 못해서 package.json을 또 다른 곳에 만들어버림
    - [terminal 에 작성] npm install express 작성
        - 설치 오류시, npm install -g express-generator 로 설치
    -  node_modules 라는 폴더가 생성됨

*/