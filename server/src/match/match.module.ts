import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MatchController } from './match.controller';
import { MatchService } from './match.service';
import { Match, MatchSchema } from './match.schema';
import { User, UserSchema } from 'src/user/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Match.name, schema: MatchSchema }, { name: User.name, schema: UserSchema }])],
  controllers: [MatchController],
  providers: [MatchService]
})
export class MatchsModule {}