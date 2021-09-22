import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { MatchController } from './match/match.controller';
import { UserService } from './user/user.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/leaderboard')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
