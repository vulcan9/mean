const path = require('path');

// dest 폴더 clean
const CleanWebpackPlugin = require('clean-webpack-plugin');

// node_modules 번들에 포함시키지 않기
// https://github.com/liady/webpack-node-externals
const nodeExternals = require('webpack-node-externals');

const DIST_DIR = '../dist/server';
let configDefault = {
    target: 'node',

    // 상대 경로 기준을 src 폴더로 설정
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: '../index.js'
    },
    output: {
        // 절대경로
        path: path.resolve(__dirname, DIST_DIR),
        filename: 'index.js'
    },

    node: {
        /*
        * __dirname
        *  - 컴파일 이전값 : 'H:\Project mean\mean\server\src\routes'
        *  - true : 'src\routes'
        *  - false : 'H:\Project mean\mean\server' (항상 root를 가리킴)
        *  - 'mock'(default) : '/'
        */
        __dirname: true,
        __filename: true
        // console: true,
    },

    externals: [nodeExternals()],
    plugins: [
        new CleanWebpackPlugin([DIST_DIR])
    ],

    module: {}
};

// https://webpack.js.org/concepts/mode/
module.exports = (env, argv) => {

    var userConfig;

    //--------------------------
    // webpack --mode=development
    //--------------------------

    if (argv.mode === 'development') {
        userConfig = {
            watchOptions: {
                ignored: [
                    // 'dist/**/*',
                    'node_modules'
                ]
            },
            watch: true
        };
    }

    //--------------------------
    // webpack --mode=production
    //--------------------------

    if (argv.mode === 'production') {
        userConfig = {
            watch: false
        };
    }

    var config = Object.assign({}, configDefault, userConfig, {mode: argv.mode});
    return config;
};

// https://webpack.js.org/configuration/configuration-types/#exporting-multiple-configurations
// module.exports = [config];