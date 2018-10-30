# mongodb

http://www.mongodb.org
http://www.mongodb.org/downloads
http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/

1. 설치
    * mongoDB 설치 파일 다운로드 (Production Release (2.6.6))
      - https://www.mongodb.com/download-center/v2/community
    * 설치
      - Service Name : MongoDB
      - Data 폴더 : C:\Program Files\MongoDB\Server\4.0\data\
      - Log 폴더 : C:\Program Files\MongoDB\Server\4.0\log\
    * 참고)
      - [MongoDB client from Studio3T](https://studio3t.com/)
      - [MongoDB Atlas Database as a Service](https://www.mongodb.com/download-center#atlas)
      - pdi1066@naver.com / mongodb0!

2. 시스템 환경 변수에 bin 폴더 등록
    * C:\Program Files\MongoDB\Server\4.0\bin
    * cd C:\Program Files\MongoDB\Server\4.0\bin

3. 데이터 저장소 폴더 생성
    * 저장소 : C:\mongodb\data\db
    * 로그파일 위치 : C:\mongodb\log
    *  CMD 설정 (관리자 권한으로 설정) - 쓰기권한 설정 확인할것

4. 기타 변경
    * 포트 변경 (default : 27017)
      mongod --port 8000
    * Admin Page 주소세팅
      - default : port + 1000으로 세팅하면 웹페이지가 보여진다.
      - http://localhost:28017/
        mongod --bind_ip 127.0.0.1

5. 실행 (관리자 권한) : mongodb 인스턴스 활성화
    * mongod --logpath "C:\mongodb\log\log.txt"
    * mongod --dbpath "C:\mongodb\data\db"
      (기본 port 27017로 설정되어 있음)
    * 예)
    ```
    mongod --logpath "C:\mongodb\log\log.txt" --bind_ip 127.0.0.1 --logappend --directoryperdb --install
    mongod --dbpath "C:\mongodb\data\db"
    mongod --install --serviceName Mongodb --serviceDisplayName Mongodb
    ```

6. 확인
    * bin/mongo.exe 실행 (클라이언트 prompt에서 다음 입력)
```
// 데이터 저장 (생성)
> db.test.save({a:1})

// 데이터 읽기
> show dbs
> db.test.find()
> db.stats()

// collection 삭제
> show collections
> db.test.drop()

// db 삭제
> show dbs
> use test
> db.test.dropDatabase()
```

7. 인스턴스 종료 (shutdown할때는 반드시 Admin 데이터베이스로 이동 후 명령어 실행)
```
> use admin
> db.shutdownServer()
```

8. WebStorm plugin : [Mongo Plugin 설치](https://github.com/dboissier/mongo4idea)
    * Setting > Tools > Mongo Plugin 에 mongo.exe (shell) 경로를 지정하면 terminal에서 직접 사용 가능함
```
# Terminal 1 :
> cd C:\Program Files\MongoDB\Server\4.0\bin
> mongod --dbpath "C:\mongodb\data\db"

# Terminal 2 : Mongo Explorer 에서 db 선택하면 나타남
> cd C:\Program Files\MongoDB\Server\4.0\bin
> mongo
```

### [mongoDB] 기본 쿼리 문법
```
# 반복문으로 추가
  for(i=0;i<100;i++){ db.student.save({a:i,score:5}); }

# 검색
  // 기본검색
  > db.student.find({a:2});

  // 범위 검색
  > db.student.find({a:{'$gt':1}});

  // AND 검색
  > db.student.find( { a:{'$gte':1, '$lte':100 } } );

  // OR 검색
  > db.student.find( { '$or': [ {a:{'$lt':1}}, {a:{'$gt':100}}]});

  // Boolean 검색
  > db.student.find( { a:{'$exists':false } } );

  // 항목별 검색
  > db.student.find( {}, {a:1} );
  > db.student.find( {}, {_id:0, a:1} );

# 생성된 컬렉션 조회
  > db.test.save( {test:1} );
  > show collections

# 단순 삽입
  > db.users.save( {name:'Kim', language: ['java', 'c'] } );
  > db.users.save( {name:'Lee', languages: ['ruby', 'php'] } );

# 수정
  > db.users.update( {name:'Park'}, {name:'Sal', languages:['nodejs'] });
  //-- replace 속도가 빠르다

# 항목추가
  > db.users.update( {name:'Park'}, {'$set':{age:50} } );

# 항목제거
  > db.users.update( {name:'Park'}, {'$unset':{age:50} } );

# 배열값 제거
  > db.users.update( {name:'Kim'}, {'$pull':{languages:'php'} } );

# 배열값 추가
  > db.users.update( {name:'Kim'}, {'$push':{languages:'python'} } );

# 조건 값삭제
  > db.users.remove( {name:'Kim'} );

# 값 전체 삭제
  > db.users.remove(); -- 구버젼
  > db.users.remove( {} );

# 컬렉션 삭제
  > db.test.drop();

# DB종료
  > use admin
  > db.shutdownServer();
```
