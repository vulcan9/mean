
### Guard 사용법
// http://jodu.tistory.com/25

- Router를 사용하면서 접하게 되는데 간단하게 설명하면 라우팅 시 해당 url에 대한 접근을 제어할 때 사용
- 기본적으로 가드에는 4가지의 가드가 있다. 

#### CanActivate 가드 : 
해당 가드는 라우터에 대해서 접근이 가능한지 불가능 한지 접근 권한을 체크 하는 기능을 한다. 
해당 가드를 사용 하고자 한다면 구현하고자 하는 가드 클래스에 
CanActivate 인터페이스 모듈을 구현 해야하며 
해당 인터페이스에는 `canActivate` 메소드가 있으며 
```
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) :boolean | Observable<boolean> | Promise<boolean>
```
해당 메소드 안에서 라우터 접근 로직을 구현 하거나 구현된 서비스를 사용 하면 된다.

#### CanActivateChild가드 : 
위에서 설명한 CanActivate 가드와 같은 역할을 하며 
자식 라우터의 접근에 대한 판별을 하게 되며 
CanActivateChild 인터페이스를 구현한다.

#### CanDeactivate 가드 : 
현재 라우터에서 다른 라우터로 변경되면서 현재의 라우터가 비활성 될 때 호출 되는 라우터 이며 
CanDeactivate 인터페이스를 구현한다.

#### Resolve 가드 : 
라우트의 데이터를 가져와 컴포넌트에 제공하는 역할을 한다.
























