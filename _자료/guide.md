## 새 프로젝트 폴더 생성 (project root)

## angular 프로젝트 생성
```
$ ng new client --directory client --skip-install --skip-git --routing
```
##### root로 파일 이동

- .editorconfig
- .gitignore
- application/package.json 파일
- application/angular.json 파일

##### node 모듈 설치
- root에 모듈 설치
    ```
    $ npm install
    ```

## 프로젝트 설정

##### package.json 파일에 내용 추가 
```
    "name": "sprout",
    "version": "1.0.0",
    "description": "Build all-in-one structure for Angular App",
    "main": "index.js",
    "author": "pdi1066@naver.com",
    "license": "MIT",
    "private": true,
```

##### 경로 수정 및 테스트
설정 파일이 참조하는 경로를 "application/~"으로 모두 수정
- angular.json 파일 수정  
```
src --> application/src
e2e --> application/e2e

// 테스트
$ ng serve -o
$ng build --base-href ./ --prod
```
- tslint.json 파일 수정 : "node_modules" 경로 --> "../node_modules"
```
"rulesDirectory": [
    "../node_modules/codelyzer"
],

// 테스트
$ ng lint
```
- tsconfig.json 파일 수정 : root로부터 상대경로로 수정
"typeRoots": [
  "../node_modules/@types"
],

##### 기타 테스트
```
$ ng test
$ ng e2e
```

## output 경로 설정
- angular.json 파일 수정  
```
// ng build 옵션으로 설정함 : --output-path ./dist/_client/web
// "outputPath": "dist/_client/web",
```

ng generate library
ng generate module

// Multiple Projects
ng generate application tool --skip-package-json --skip-install --skip-ts-config
// https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/create-library.md
ng generate library shared --entry-file shared  --skip-package-json --skip-install --skip-ts-config

새폴더에 angular.json만 복사한 후 Multiple Projects 구조로 프로젝트 진행한다.
ng generate application
ng generate library


-----------------
// 모듈 패키징
-----------------
https://medium.com/@nikolasleblanc/building-an-angular-4-component-library-with-the-angular-cli-and-ng-packagr-53b2ade0701e
- project 생성
- 하위 모듈 생성, export 목록 설정
@NgModule({
  ...
  exports: [HeaderComponent]
})

### 모듈 패키징 1.
https://angularfirebase.com/lessons/build-an-angular-library-with-ngpackagr/
패키져 설치 : npm install ng-packagr --save-dev

projects/shared2/package.json 파일에 ngPackage 설정
{
  "name": "shared2",
  "version": "0.0.1",
  "peerDependencies": {
    "@angular/common": "^6.0.0-rc.0 || ^6.0.0",
    "@angular/core": "^6.0.0-rc.0 || ^6.0.0"
  },
  "ngPackage": {
    "$schema": "../../node_modules/ng-packagr/ng-package.schema.json",
    "lib": {
      "entryFile": "src/public_api.ts"
    },
    "dest": "../../dist/shared2"
  }
}

패키징 명령
    "packagr": "ng-packagr -p ./projects/shared2/package.json"

로컬에서 패키징된 모듈 사용
npm i dist/shared2

- 모튤 사용
@NgModule({
  imports: [HeaderModule],
})



로컬에 자동 패키징 후 적용하기

### 모듈 패키징 2.
https://github.com/angular/angular-cli/wiki/build
https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/create-library.md

패키져 설치 : npm i @angular-devkit/build-ng-packagr
패키징 명령 : ng build shared2 --watch
(--watch : Angular CLI version 6.2)



### Publish to NPM
리소스가 있는 프로젝트에 배포한 npm 모듈을 다시 설치하려하면 중복된 모듈로 인식해 설치되ㅐ지 않음.
배포하기 전에 .npmignore 파일을 생성해서 배포하지 않을 파일들을 지정
https://rhostem.github.io/posts/2017-08-14-typescript-npm-package/
```
.awcache
.vscode
config
src
node_modules
(...)
```

npm 등록 (회원가입)
https://docs.npmjs.com/getting-started/publishing-npm-packages
registry: https://npmjs.com/~pdi1066

npm adduser (or npm login)
email 인증 메일 확인
npm whoami
.npmignore, readme.md 파일 작성 후
npm version [major | minor | patch | ...] -m "update message"
npm publish

https://www.npmjs.com/~pdi1066 에서 배포 패키지 확인




projects (module source code)
  - i18n module
  - core module
  - shared module (model, interface...)
  - external interface (server, socket, native, connection...)
  - router 별로 module 분리
    (lazy loading : https://bulldogjob.com/articles/539-scalable-angular-application-architecture)

  // app module (application source code)  
  - winApp
  - webApp

dist (deploy code)
  - core
  - shared
  - external
  
  - win
  - web
    
web
  - ui module

desktop : client App Container

server (webpack build)
  - web : Express 서버 구성
  - api : api 서버 구성
  - socket : socket 서버 구성

// MEAN
https://auth0.com/blog/real-world-angular-series-part-1/
// material-ui
https://steemit.com/kr-dev/@igna84/angular-4-material-ui


server
https://github.com/linnovate/mean