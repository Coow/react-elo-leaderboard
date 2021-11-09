require('dotenv').config();
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { MatchController } from './match/match.controller';
import { UserService } from './user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './user/user.module';
import { MatchsModule } from './match/match.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_CONNECTION_STRING ?? `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_IP}:27017/${process.env.DB_DATABASE}?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false`, {
    useCreateIndex: true,
    autoIndex: true,
  }), UsersModule, MatchsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
