## Server
```
npm i nodemon
nodemon server/server.js
```
 
 ## Router 설정
```js
const app = express();
const routerModule = require('./routes/router');
const router = routerModule.get({
    strict : false,
    caseSensitive : true,
    mergeParams : false
})

    // web-server 설정
    .web(__dirname + '/routes/route.web')
    
    // api-server 설정
    .api(__dirname + '/routes/route.web')
    
    // 기타 middleware 설정
    .run();

app.use('/dev', router);

// 모든 페이지 호출에 공통 적용 (예 : 404 Page)
app.use('/', routerModule.get().run());
```
 
 ## web server 설정
 
```js
const routerModule = require('./routes/router');
routerModule.get().web([{
     // 호출할 가상 URL
     url: '/dev',
     path: 'global.ROOT.web 에서 상대 경로',
     config: {
         // dotfiles: 'deny',
         // extensions : ['js']
         'index': ['index.html']
     }
}]).run();
```
 
 ## api server
 
```js
const routerModule = require('./routes/router');
routerModule.get().api([{
     url: '/',
     // 'all', 'get', 'post', 'put', 'delete'
     all: function (req, res, next) {
         // next();
     },
     get: function (req, res, next) {
         // res.json('{"result": "susses"}');
     },
     put: function (req, res, next) {
         // req.user.name = req.params.name;
         // res.json('{"result": "susses"}');
     },
     post: function (req, res, next) {
         // next(new Error('not implemented'));
     },
     delete: function (req, res, next) {
         // next(new Error('not implemented'));
     }
}]).run();
```
