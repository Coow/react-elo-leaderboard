import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  nick: string;

  @Prop()
  localUUID: string;

  @Prop()
  elo: number;

  @Prop()
  wins: number;
  
  @Prop()
  losses: number;

  @Prop()
  kFactor: number;
}

export const UserSchema = SchemaFactory.createForClass(User)