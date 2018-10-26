// https://www.npmjs.com/package/commander
const args = require('commander');
const path = require('path');

module.exports.get = get;

//////////////////////////////////////////////
// Arguments 전 처리
//////////////////////////////////////////////

// Automated --help
// node src/server.js -h
// nodemon ./server

function get() {
    args.version('0.0.1', '-v, --version')

        // web server
        .option('-p, --port <number>', 'server port.', 4000)
        .option('-c, --config <path>', 'config 파일 경로.')

        // DB
        .option('--db-port <path>', 'db port.')
        .option('--db-name <name>', 'db name.')

        .parse(process.argv);

    //--------------
    // Merge
    //--------------

    // const isDevelop = Boolean(process.env.NODE_ENV === undefined);
    // if (isDevelop) {
    //     console.log('* 서버 환경 : Original 소스');
    // } else {
    //     console.log('* 서버 환경 : Compiled 소스(', process.env.NODE_ENV, ')');
    // }

    const configDefault = require('./server.config.default');

    let userConfig;
    if (args.config) {
        const configFile = path.resolve(__dirname, '../', args.config);
        console.log('* 설정 파일 : ', configFile);
        userConfig = require(configFile);
    } else {
        console.log('* 설정 파일 : default');
        userConfig = {};
    }
    var config = Object.assign({}, configDefault, userConfig);

    //--------------
    // args 적용
    //--------------

    if (args.port) config.web.port = args.port;

    console.log('\t- server.root : ', config.server.root);
    console.log('\t- web.root : ', config.web.root);

    // DB
    if (args.dbPort) config.db.port = args.dbPort;
    if (args.dbName) config.db.name = args.dbName;

    // console.log('  - db protocol : ', args.dbProtocol);
    // console.log('  - db host : ', args.dbHost);
    // console.log('  - db port : ', args.dbPort);
    // console.log('  - db name : ', args.dbName);

    return config;
}
