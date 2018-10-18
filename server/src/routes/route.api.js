
// 라우터 설정 : http://expressjs.com/4x/api.html#router

module.exports = [
    /*
    {
        url: '/',
        // 여기에 함수를 직접 구현해도 됨
        get: function (req, res, next) {
            res.json('{"result": "susses!"}');
        }
    },
    //*/

    // path : /user 호출을 처리하는 함수를 구현한 user.js 파일 경로
    // ENV.api.root 위치에 대한 상대 경로 (./user.js)
    {url: '/', path: './default'},
    {url: '/crud', path: './crud.sample'}
];