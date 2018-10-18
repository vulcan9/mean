## Server
```
npm i nodemon
nodemon (index.js)
```
 
## 서버 구동 옵션 보기
```
node index.js -h
```

## Server 설정
설정 파일로 web, api, db 서버 환경을 모두 설정할 수 있다.
1. `core/server.config.default.js` 파일에 의해 기본 설정된다.
2. 개발 환경인 경우(`--dev` 옵션) `./core/server.config.prod.js` 파일 내용이 추가 (merge) 된다.
3. `--config` 옵션으로 config 파일 경로가 지정되면 해당 파일 내용으로 추가 (merge) 된다.

## Router 설정 로직
1. `router.service.js` 에서 최상위 route url을 설정한다.
2. 필요한 경우 `router.js` 파일에 로직을 추가한다.
3. `router.service`에 설정한 `route.xxx.js` 파일에서 하위 route (파일)을 설정한다.

```js
    const app = express();
    const routerModule = require('./router');
    const ENV = app.get('ENV');

    // web-server 설정
    const router_web = routerModule.get().web(
        ENV.server.root + '/routes/route.web',
        ENV.web.root
    ).run();
    app.use('/web', router_web);
    
    // api-server 설정
    const router_api = routerModule.get().api(
        ENV.server.root + '/routes/route.api',
        ENV.api.root
    ).run();
    app.use('/api', router_api);
    
    // 기타 middleware 설정
    // 모든 페이지 호출에 공통 적용 (예 : 404 Page)
    app.use('/', routerModule.get().run());
```
 
## web server router 설정
`routes/route.web.js` 파일 참고
 
## api server router 설정
`routes/route.api.js` 파일 참고
