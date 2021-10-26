import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MatchDocument = Match & Document;

@Schema()
export class Match {
    @Prop({required: true})
    player1uuid: string

    @Prop({required: true})
    player2uuid: string

    @Prop({required: true})
    player1score: number

    @Prop({required: true})
    player2score: number

    @Prop({required: true})
    player1win: boolean

    @Prop({defaut: false})
    player1forfeit: boolean

    @Prop({defaut: false})
    player2forfeit: boolean

    @Prop({default: Date.now})
    matchEnded: Date
}

export const MatchSchema = SchemaFactory.createForClass(Match)