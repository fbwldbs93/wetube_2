/*
    cannot GET / 

    GET / POST

    GET
    - 보통 웹사이트를 가면 URL을 적는데
    - 이때 브라우저가 GET method 를 실행함
    - 기본적으로 그렇게 브라우저가 페이지를 읽어옴

    POST
    - 웹사이트에 로그인 하면 POST를 통해 하게됨
    - POST라는 method를 통해 브라우저가 웹사이트에 정보를 전달하는 것

    ***위의 것들이 바로 웹사이트가 작동하는 방식이자
    브라우저가 작동하는 방식임.

    ****그러므로 GET request로는 정보를 전달할 수 없음
    :::: POST request로는 정보를 전달할 수 있지!!!!

    ※ 예를 들면
    - 영상에 코멘트를 단다고 하면
    :: POST request를 만들어낼거임
    :: 왜냐면 서버로 정보를 전달하기 때문 
    :: 그럼 서버는 실행을 함
    (저장한다기 보단 적합한 http method 를 사용한다는 말)

*/

const express = require("express");
const app = express();

const PORT = 4000;

function handleListening(){
    console.log(`Listening on : http://localhost:${PORT}`);
}

/*
    어떤 사람이 이 URL로 접근할때 응답하게 해보자
*/

function handleHome(req, res){
    //console.log('Hi from home!!');
    console.log(req);
    res.send('Hello from home');
}

app.get("/", handleHome);
//main URL로 접근했을 때 작동
//어떤 사람이 app.get(/)에 접근하면 handleHome 호출

/*
    *** 주의!
    - request는 있는데 그에 대한 응답이 없으면 무한로딩이 되면서 에러가 뜸
    - 내가 만든 서버로 응답하거나
    - 에러를 응답하거나
    - OK를 응답하거나...등 뭐가 됐든 응답을 해야함

    ------------------
    handleHome()에
    req(request object)와 res(response object) 호출 값을 넣어줌 
    
    - request object 

    ::우리가 정보를 얻고자 하면 누가 페이지를 요청했는지나
    어떤 종류의 데이터가 페이지로 전송됐는지 그럴때
    request object를 이용할거임

    :: 아이디와 패스워드를 전송한다면 (app.post())
    서버에는 request object로 그 정보를 얻을 수 있음.

    - response object 

    ::

*/

app.listen(PORT, handleListening);