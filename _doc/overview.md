## 프로젝트 생성 개요
application + library 프로젝트 구성

#### angular 7 환경 설치
```
npm install -g @angular/cli
```
 
#### Angular Workspace 생성

```
// routing, scss 사용함
ng new mean (--routing --skip-install --create-application=false)
npm install
```

#### Application 생성

```
cd mean
ng g app client --routing
```

#### Library 생성

- ALWAYS: Use a prefix when generating a library (default : lib)  
- prefix는 angular.json 에 기록됨

shared, auth 라이브러리 추가
```
ng g lib auth --routing --prefix=use
ng g lib shared --prefix=use
```

shared 라이브러리에 컴포넌트 추가
```
ng g c pages/page404 --flat --prefix=use --project=shared
```

### 실행

library 빌드된 결과를 app에서 사용하므로 라이브러리를 먼저 컴파일해야 application이 컴파일 됨.  

foreman (ProcFile)이나 npm script를 사용하여 한번에 실행할 경우 잘 진행되지 않음  
(watch에서 진행이 멈춘다던가 또는 빌드 타이밍이 안맞다던가...)  

따라서 각각의 terminal에서 하나씩 실행해야함  
```
// terminal 1
ng build shared --watch

// terminal 2
ng build auth --watch

// terminal 3
ng serve -o
```

#### 라이브러리 작성
auth 라이브러리에 컴포넌트를 추가한다고 하면
```
ng g c user —-project=auth
```
이때 서로 다른 프로젝트간 코드 참조를 위해 설정이 필요함
- (root) `tsconfig.json`에 컴파일 경로(paths) 추가됨
- export 대상은 파일에 수동으로 추가 해야함.
```
// public_api.ts
export * from './lib/user/user.component';

// auth.module
declarations: [..., UserComponent],
```

#### 라이브러리 사용
- 모듈에 import 하여 사용한다.
- `tsconfig.json`에 경로(paths) 추가되었으므로 라이브러리 이름으로 import 가능.
- 상대 경로로 라이브러리 참조하지 말것 (컴파일, 배포 후 참조 못함)

ALWAYS: In your test application import using your library by name and NOT the individual files.
```
import {AuthComponent, UserComponent} from 'auth';
import {Page404Component} from 'shared';
```

#### 배포
이후 npm에 배포하여 사용할 수 있다.
```
(npm publish)
```

### 서버 환경에서 테스트
접속 테스트 : `http://127.0.0.1:4000/web`
```
cd server
npm install
cd ..
npm run server
```
index.html 수정 : 
```
<base href="./">
```
- 먼저 App 빌드해서 최종 소스를 적용
- nodemon으로 코드 변경을 모니터링 할 수도 있지만 매번 빌드 과정을 거쳐야 하므로 개발할때는 `ng serve`를 이용하는 것이 좋다.