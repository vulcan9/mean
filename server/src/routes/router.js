// let querystring = require("querystring");
// let url = require('url');
// let mime = require('mime');
// let fs = require('fs');


/*
                                 url.parse(string).query
                                               |
             url.parse(string).pathname        |
                           |                   |
                           |                   |
                         -----     -------------------
http://localhost:8888/   start  ? foo=bar  &hello=world
                                  ----            -----
                                    |                  |
                                    |                  |
                  querystring(string)["foo"]           |
                                                       |
                        querystring(string)["hello"]
*/

const path = require('path');
const express = require('express');
const serveStatic = require('serve-static');

const defaultRouterConfig = {
    strict: false,
    caseSensitive: true,
    mergeParams: false
};

// serve-static : https://www.npmjs.com/package/serve-static
// app에서 정적 디렉토리 설정(serveStatic) 할때 index옵션에서 page 설정됨
const defaultConfig = {
    // dotfiles: 'deny',
    // extensions : ['js']
    'index': ['index.html']
};

module.exports.get = function (config) {
    return new Router(config || defaultRouterConfig);
};

function Router(config) {
    this._router = express.Router(config || {});
}

Router.prototype = {
    _router: undefined,

    // web-server
    // {url: '/web', path: './dist/client'}
    web: function (routes, webRoot) {

        // 경로로 전달됨
        if (typeof routes === 'string') {
            routes = require(path.resolve(routes));
        }

        routes.forEach((route) => {
            const actualPath = path.resolve(webRoot, route.path);
            this._router.use(route.url, serveStatic(actualPath, route.config || defaultConfig));
        });
        return this;
    },

    // api-server
    // 'all', 'get', 'post', 'put', 'delete'
    api: function (routes, apiRoot) {

        // 경로로 전달됨
        if (typeof routes === 'string') {
            routes = require(path.resolve(routes));
        }

        const method = ['all', 'get', 'post', 'put', 'delete'];
        // router[name] : function (req, res, next) {}
        let createRoute = (route, router)=>{
            method.forEach((name)=>{
                if(name in router){
                    route[name](router[name]);
                }
            });
        };

        routes.forEach((route) => {

            // 처리 메서드가 직접 전달된 경우
            if(!route.path){
                createRoute(this._router.route(route.url), route);
                return;
            }

            // route.path : 파일 경로로 전달된 경우
            let children = require(path.resolve(apiRoot, route.path));
            for(let pattern in children){
                let childURL = (route.url + pattern).replace(/(\/\/|\\\\)/g, '/');
                let childRoute = this._router.route(childURL);
                let childRouter = children[pattern];
                createRoute(childRoute, childRouter);
                // console.log('routeFunction : ', childURL, childRouter);
            }
        });

        return this;
    },

    // app.use('/app', this._router);
    run: function () {

        // let logger = require('morgan');
        // this._router.use(logger());

        // 404 Page
        this._router.all('*', res_404);

        return this._router;
    }
};

//-----------------------------------
// 404 Page
//-----------------------------------

function res_404(req, res, next) {

    console.log("# 404 Not found");
    let content = "<h1>404 Not found</h1>READ FILE ERROR: Internal Server Error!";

    res.writeHead(404, 'text/html');
    res.write(content);
    res.end();
}

