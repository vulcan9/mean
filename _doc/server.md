## Server
```
npm i nodemon
nodemon server
```
 
### 서버 구동 옵션 보기
```
node server/index.js -h
```

### Server 설정
설정 파일로 web, api, db 서버 환경을 모두 설정할 수 있다.
1. `server.config.default.js` 파일에 의해 기본 설정된다.
2. 개발 환경인 경우(`--dev` 옵션) `server.config.prod.js` 파일 내용이 추가 (merge) 된다.
3. `--config` 옵션으로 config 파일 경로가 지정되면 해당 파일 내용으로 추가 (merge) 된다.

[서버 설정](../server/README.md)