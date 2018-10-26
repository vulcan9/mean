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
        url: '/web',
        routes: require('./routes/sample/route.web')
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