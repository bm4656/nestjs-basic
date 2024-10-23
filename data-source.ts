import * as path from 'path';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'mysql',  // 어떤 DB를 사용할지
  host: '127.0.0.1',
  port: 3306,  // MySQL 기본 포트 3306
  database: 'basic',
  username: 'root', // MySQL 설치시 설정한 유저네임
  password: '0000', // MySQL 설치시 설정한 비밀번호
  entities: [  // entity는 DB의 테이블을 지칭, 어떤 테이블이 사용되는지 테이블에 대한 정보를 가져오는 것
    path.join(__dirname, 'src/entities/**/*.entity.ts'),
    path.join(__dirname, 'dist/entities/**/*.entity.js'),
  ],
  synchronize: false, // false 권장
  logging: true,  // typeorm 쿼리가 실행될 때, 터미널에 MySQL쿼리가 어떻게 짜여졌는지 로깅됨
});