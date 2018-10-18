// https://www.npmjs.com/package/commander
const args = require('commander');
const path = require('path');

module.exports.get = get;

//////////////////////////////////////////////
// Arguments 전 처리
//////////////////////////////////////////////

// Automated --help
// node server.js -h

function get(){
    args.version('0.0.1', '-v, --version')
        .option('--dev', 'develop mode.', false)

        // web server
        .option('-p, --port <number>', 'server port.', 4000)
        .option('-r, --root <path>', 'web 서비스 root folder.', '../dist')
        .option('-c, --config <path>', 'config 파일 경로.', './env/server.config.prod')

        // DB
        // .option('--db-protocol <protocol>', 'db protocol.', 'mongodb')
        // .option('--db-host <host>', 'db host.', 'localhost')
        .option('--db-port <path>', 'db port.')
        .option('--db-name <name>', 'db name.')

        .parse(process.argv);

    //--------------
    // Merge
    //--------------

    const isDevelop = Boolean(args.dev);
    const configDefault = require('./env/server.config.default');
    const userConfig = args.config ? require(args.config) : (isDevelop ? require('./env/server.config.prod') : {});
    var config = Object.assign({}, configDefault, userConfig, {isDevelop: isDevelop});

    //--------------
    // args 적용
    //--------------

    if(args.port) config.web.port = args.port;

    // path를 절대경로로 변환
    config.server.root = path.resolve(__dirname, config.server.root || './');
    config.web.root = path.resolve(__dirname, config.web.root || './');
    config.api.root = path.resolve(__dirname, config.api.root || './');

    // DB
    if(args.dbPort) config.db.port = args.dbPort;
    if(args.dbName) config.db.name = args.dbName;

    // console.log('  - develop : ', args.dev);
    // console.log('  - port : ', args.port);
    // console.log('  - root : ', args.root);

    // console.log('  - db protocol : ', args.dbProtocol);
    // console.log('  - db host : ', args.dbHost);
    // console.log('  - db port : ', args.dbPort);
    // console.log('  - db name : ', args.dbName);

    return config;
}

// function bool(val, def){
//     console.log('  - bool : ', val, def);
//     return (val === undefined) ? true : val;
// }
