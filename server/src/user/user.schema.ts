import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({default: ""})
  firstName?: string;

  @Prop({default: ""})
  lastName?: string;

  @Prop({required: true, unique: true, index: true, type: String})
  nick: string;

  @Prop({required: true, unique: true})
  localUUID: string;

  @Prop({default: 1000})
  elo: number;

  @Prop({default: 0})
  wins: number;
  
  @Prop({default: 0})
  losses: number;

  @Prop({default: 30})
  kFactor: number;

  @Prop({default: true})
  enabled: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User)