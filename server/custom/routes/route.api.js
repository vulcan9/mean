
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

    {url: '/', routes: require('../api/default')},
    {url: '/crud', routes: require('../api/crud.sample')}
];