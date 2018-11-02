const path = require('path');

// root 경로는 index.js 로부터 상대 경로
module.exports = {

    isDevelop: true,

    server: {
        // 서버 구동 위치 (index.js)
        root: path.resolve(__dirname, '../')
    },

    // WEB 서비스
    web: {
        port: 4000,
        host: '127.0.0.1',
        // 웹서비스 폴더 위치
        root: path.resolve(__dirname, '../../dist'),
        url: '/web',
        routes: require('./routes/route.web'),
        notFound: '/web'
    },

    // API 서비스
    api: {
        port: 4000,
        host: '127.0.0.1',
        url: '/api',
        routes: require('./routes/route.api')
    },

    // DB 설정
    db: {
        protocol: 'mongodb',
        host: 'localhost',
        port: 27017,
        name: 'test'
    }
};