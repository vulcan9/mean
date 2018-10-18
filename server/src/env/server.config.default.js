
// root 경로는 server.js 로부터 상대 경로
module.exports = {
    // isDevelop: true,

    server: {
        root: './'
    },

    web: {
        port: 4000,
        root: '../../dist'
    },

    api: {
        // api를 처리하는 js 파일이 있는 폴더 위치
        root: './api'
    },

    db: {
        protocol: 'mongodb',
        host: 'localhost',
        port: 27017,
        name: 'test'
    }
};