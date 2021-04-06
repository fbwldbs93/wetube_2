/*--------------------------------------------
express JS 
--------------------------------------------*/

/*
    What is a Server

    서버란? 
    1. 컴퓨터다.(물리적)
    서버 하나마다 엄청나게 많은 하드 드라이브를 품고 있음.
    메모리랑 보드도 갖고 있음

    2. 인터넷에 연결된 한 덩어리의 코드다. (소프트웨어적)
    일종의 네트워크에 연결된 것. (Public 또는 Private)
    URL에 응답하고, 접속을 허락하는 일을 함

    즉, 인터넷에 연결된 내 접속 요정에 응답하는 컴퓨터.


    -------------------------------------------------------
    What is Express

    Express.js 는 프레임워크임 (node.js 에서 작동하는 프레임 워크)
    
    node.js 로 서버를 만드는 거라면 express를 이용할 수 있음
    몇 줄의 코드로 서버를 만들 수 있음

    **여러가지 프레임워크
    - Django는 Python으로 된 프레임워크
    - Rails는 Ruby로 된 프레임워크
    - Laravel은 Php로 된 프레임워크

    *서버를 개발하는 것은 대부분의 경우 거의 동일함
    :: Connection을 Listen 해주고 파일을 처리하고 html을 전송해주고
    데이터를 저장하고 form에서 데이터를 받아오고 등 이런것들이 반복적임

    *모두 다른 방식이지만 같은 일을 해냄

    -------------------------------------------------------
    installing Express with NPM

    1. 터미널창 켜서 > 작업중인 폴더로 접근 > code . 로 vscode 열기

*/

console.log("hi");
//터미널 입력 :::: node expressJS_1.js 를 입력 > hi 출력

/*
    NPM :: Node Package Manager (파일관리시스템)
    - JS파일(패키지)관리를 책임져 줌

    NPM 에서 다운받고, 업데이트하고...등등

*/

//터미널 입력 :::: npm -v > 6.14.11 출력 (npm 버전)

/*
    - npm 설치한적이 없는데?!
    * node.js를 다운로드 받으면 자동으로 npm 이 설치됨

    ----------------------------------------------
    npm으로 프로젝트를 시작하려면
    npm이 정한 방식으로 프로젝트를 시작해야함
*/

//터미널 입력 :::: npm init

/*
    npm init 은 우리에게 많은 질문을 할 거임
    - package 이름 (이 경우 나의 웹사이트가 package 임) : webtube
    - description : Cloning Youtube with Vanilla and NodeJS
    - Author : Jiyun
    - Is this OK? y

    :: 그러면 package.json 이 생성됨

    -----------------------------------------------
    이제 express를 설치해보자

    **주의! npm을 실행할 때는 꼭 프로젝트 폴더에 
    package.json이 있는 폴더에서 실행해야함
    package.json이 없는 곳에서 실행하면 package.json을 읽지 못해서
    package.json을 또 다른 곳에 만들어버림

*/

//터미널 입력 :::: npm install express (설치하는데 시간 오래 걸림) > 설치! (package-lock.json 추가됨)
// package.json에 dependencies 추가됨

/*
    *node_modules에 있는건 그냥 NPM을 통해 다운로드 된 것 (신경안써도 됨)

    -----------------------
    **package.json 을 갖는건 엄청 좋음
    - 만약 친구랑 프로젝트 협업을 하고 싶다면
    node_modules 폴더를 다 건내줄 필요가 없음

    해당js파일과 package.json 파일만 가지고 있는 상태에서
    터미널입력 :::: npm install 만 하면
    자동으로 dependencies를 찾아서 node_modules와 package-lock.json을 다운로드 하게됨

    --------------------------------------------
    ****git에 저장할 거임
    //git ::::::  git init 입력해주기

    ***********   또 해야할 것이 있음!!!(gitignore)  ***************
    - node_modules을 ignore 해줘야함 
    왜냐하면 333개의 모듈이 github로 관리될 대상으로 잡히고 있기 때문
    이것들이 다 처리될려고 하는 거임 (그러면 엄청 무거워짐)
    하지만 내가 만든 코드만 업로드 하고 싶음.

    ==>> 그래서 .gitignore 이라는 파일을 만들거임
    
    - new file 로 새 파일 생성해서 파일 이름 .gitignore 입력
    - .gitignore 파일에 node_modules 입력 
    - node_modules 파일이 회색으로 변하고, 모듈 개수가 6개로 줄어듬

    #### gitignore 에 추가해야 하는 파일들의 표준이 있음
    https://github.com/github/gitignore/blob/master/Node.gitignore
    위 링크에 gitignore 에 추가해야하는 파일 리스트 볼 수 있음

    #### 그리고 여기에 package-lock.json도 포함해야함
    (왜냐, package에 대한 security와 관련되어 있음)

    --------------------------------------

    README.md 도 생성
    --니코쌤은 notes들을 readme에 저장함


    --------------------------------------
    암튼 다시 git 에 올리기

    //git :::: git remote add origin https://github.com/fbwldbs93/wetube.git (내 깃 주소에 연결)

    //git :::: git add . (파일 전체 대기열에 추가 시키기)

    //git :::: git commit -m "restart Commit" (커밋하기)

    //git :::: git push origin master 
    
    ** failed to push some refs to git 에러 생기는 이유
    - github에 있는 파일과 현재 push 하려는 commit이 일치하지 않아 발생
    
*/




