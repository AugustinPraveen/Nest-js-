import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { SsmModule } from './ssm/ssm.module';
import { Student } from './ssm/student.entity';

@Module({
  imports: [ ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [Student],
      synchronize: true,
    }),
    SsmModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
