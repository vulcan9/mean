const path = require('path');

module.exports = {

    isDevelop: true,

    server: {
        // 서버 구동 (index.js) 위치
        root:  path.resolve(__dirname, '../')
    },

    //*
    // WEB 서비스
    web: {
        port: 4000,
        host: '127.0.0.1',
        // 웹서비스 폴더 위치
        root: path.resolve(__dirname, '../../dist'),
        // angular에서 지정된 router 경로는 직접 접근할 수 없음(App 로딩 후 접근해야함) 
        url: '/web',
        routes: require('./routes/sample/route.web'),
        // file not found 페이지 대신 이동할 redirect 경로
        notFound: '/web'
    },

    // API 서비스
    api: {
        port: 4000,
        host: '127.0.0.1',
        url: '/api',
        routes: require('./routes/sample/route.api')
    },

    // DB 설정
    db: {
        protocol: 'mongodb',
        host: 'localhost',
        port: 27017,
        name: 'test'
    }
    //*/
};