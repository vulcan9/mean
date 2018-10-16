# mean
reactive mean stack boilerplate



## 멀티 프로젝트 생성 및 실행 테스트
#### angular workspace  설정
package.json 파일과 angula.json 파일은 angular 프로젝트 생성시 만들어지는 파일의 내용과 같다.
1. package.json 파일
    ```
    $ npm install
    ```
2. angular.json 파일
    ```json
    {
      "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
      "version": 1,
      "newProjectRoot": "projects",
      "defaultProject": "",
      "projects": {}
    }
    ```
3. tsconfig.json 파일
4. tslint.json 파일

#### 멀티 프로젝트 생성
`ng generate (ng g)` 명령으로 프로젝트를 생성하면 angular.json 파일에 자동으로 프로젝트 설정이 등록된다.
```
ng generate application
ng generate library
ng generate module
```

## Application Project
package.json 파일에 정의된 scripts 명령은 모두 angular.json 파일의 defaultProject에 설정된 프로젝트를 대상으로 실행된다.
```
ng generate application client --skip-install --routing
ng serve client -o
ng build (--base-href ./ --prod --output-path dist/_client/web)
```

## Library Project
참고 : [Library support in Angular CLI 6](https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/create-library.md)
##### generate
```
ng generate library shared (--entry-file shared)
```

##### build
build 결과 위치는 ng-package.json 파일에 설정됨
```
// --watch : Angular CLI version 6.2
ng build shared (--output-path dist/shared --watch)
```

##### publishing
로컬 프로젝트를 직접 참조할 수도 있다.
```
npm i dist/shared
```
npm 배포하기
- 라이브러리 폴더에 .npmignore 파일을 생성해서 배포하지 않을 파일들을 지정할 수 있다.
- 라이브러리 폴더에 readme.md 파일을 생성하면 배포 페이지에 적용된다.
- npm 사이트에서 회원가입 또는 로그인  
- 회원가입 후 email 인증메일 확인
- registry 페이지 확인 : https://www.npmjs.com/~(id)

```
// npm 등록이 안된 경우
npm adduser
// 회원 가입 되어있다면 로그인
npm login
npm whoami
```

- `version` 명령으로 버전 넘버를 업데이트 한다. (package.json 파일 자동 갱신됨)
- Npm은 publish할 때 이전과 버전이 같으면 안된다.

```
// npm 0.0.1 -m "업데이트 로그"
npm version [major | minor | patch | ...] -m "update message"
// 배포
npm publish
```

- 배포 패키지 확인 : https://www.npmjs.com/~(id)
- 자신의 프로젝트에 배포 npm 모듈을 다시 설치하려고하면 중복된 모듈로 인식해 설치되지 않는다.

##### unpublishing
```
npm login

// 해당 모듈 전부를 삭제함
npm unpublish --force [모듈 name]

// 배포된 해당 폴더로 이동해서 실행하면 해당 폴더의 버전에서 이전버전으로 롤백됨
npm unpublish --force
```

##### publishing 예
- 모듈명이 유일하지 않는다는 에러 : you do not have permission to publish ~
```
// 라이브러리 빌드
npm build shared (또는 npm build --project=shared)
// build된 위치로 이동한다.
cd dist/shared
// 로그인 상태인지 확인
npm whoami
npm publish
```

## Module 생성, 사용
1. shared 라이브러리에 connection.module 생성할려고 하는 경우
    ```
    // --project를 생략하면 `client` 프로젝트에 모듈이 생성되어 버린다.
    // root에서 ng 명령은 `defaultProject`에 적용되므로
    ng g m src/connection --project=shared (--flat)
    ``` 
2. public_api.ts 파일에 export 설정해 주어야함
    ```
    export * from './src/connection/connection.module';
    ```
3. 설치 후 모튤 사용


## 참고
- [angular-cli wiki](https://github.com/angular/angular-cli/wiki)
- [angular workspace](https://github.com/angular/angular-cli/wiki/angular-workspace)
- [Angular 6 Workspace :: Test-Drive](https://medium.com/@angularlicious/angular-6-workspace-test-drive-cfe24bbceeb3)
- [Angular CLI workspace file (angular.json) schema](https://github.com/angular/angular-cli/wiki/angular-workspace)
- [Apps That Work Natively on the Web and Mobile](https://blog.angular.io/apps-that-work-natively-on-the-web-and-mobile-9b26852495e7)