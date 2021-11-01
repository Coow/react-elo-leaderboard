import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MatchDocument = Match & Document;

@Schema()
export class Match {
    @Prop({required: true})
    team1: Array<{localUUID: string}>

    @Prop({required: true})
    team2: Array<{localUUID: string}>

    @Prop({required: true})
    team1score: number

    @Prop({required: true})
    team2score: number

    @Prop({required: true})
    team1win: boolean

    @Prop({defaut: false})
    team1forfeit: boolean

    @Prop({defaut: false})
    team2forfeit: boolean

    @Prop({default: Date.now})
    matchEnded: Date
}

export const MatchSchema = SchemaFactory.createForClass(Match)