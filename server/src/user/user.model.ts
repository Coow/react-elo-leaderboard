import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  nick: { type: String, required: true },
  localUUID: { type: String, required: true },
  elo: { type: Number, default: 1000 },
  wins: { type: Number, default: 0 },
  losses: { type: Number, default: 0 },
  kFactor: { type: Number, default: 30 },
});

export interface User extends mongoose.Document {
  firstName: string;
  lastName: string;
  nick: string;
  localUUID: string;
  elo: number;
  wins: number;
  losses: number;
  kFactor: number;
}
