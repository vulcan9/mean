// var querystring = require("querystring");
// var url = require('url');
// var mime = require('mime');
// var fs = require('fs');


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
    web: function (routes) {

        // 경로로 전달됨
        if (typeof routes === 'string') {
            routes = require(path.resolve(routes));
        }

        routes.forEach((route) => {
            const actualPath = path.resolve(global.ROOT.web, route.path);
            this._router.use(route.url, serveStatic(actualPath, route.config || defaultConfig));
        });
        return this;
    },

    // api-server
    // 'all', 'get', 'post', 'put', 'delete'
    api: function (routes) {

        // 경로로 전달됨
        if (typeof routes === 'string') {
            routes = require(path.resolve(routes));
        }

        routes.forEach((route) => {
            this._router.route(route.url)
                .all(function (req, res, next) {
                    if (route.all) route.all(req, res, next);
                    // next();
                })
                .get(function (req, res, next) {
                    if (route.get) route.get(req, res, next);
                    // res.json(req);
                })
                .put(function (req, res, next) {
                    // req.user.name = req.params.name;
                    if (route.put) route.put(req, res, next);
                    // res.json(req);
                })
                .post(function (req, res, next) {
                    if (route.post) route.post(req, res, next);
                    // next(new Error('not implemented'));
                })
                .delete(function (req, res, next) {
                    if (route.delete) route.delete(req, res, next);
                    // next(new Error('not implemented'));
                });
        });

        return this;
    },

    // app.use('/app', this._router);
    run: function () {

        // var logger = require('morgan');
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
    var content = "<h1>404 Not found</h1>READ FILE ERROR: Internal Server Error!";

    res.writeHead(404, 'text/html');
    res.write(content);
    res.end();
}

