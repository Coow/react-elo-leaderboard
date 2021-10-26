import { BadRequestException, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { User, UserDocument } from 'src/user/user.schema';
import { Match, MatchDocument } from './match.schema';

var Elorating = require('elo-rating')

// https://github.com/academind/nestjs-introduction/blob/02-mongodb/src/products/products.service.ts
@Injectable()
export class MatchService {
    constructor(
        @InjectModel(Match.name)
        private matchModel: Model<MatchDocument>,

        @InjectModel(User.name)
        private userModel: Model<UserDocument>
    ) { }

    async getMatches(sort) {
        return await this.matchModel.find().sort({ 'matchEnded': sort })
    }

    async endMatch(player1uuid: string, player1score: number, player2uuid: string, player2score: number) {
        if(player1uuid == player2uuid) {
            throw new NotAcceptableException()
        }

        const player1 = await this.userModel.findOne({ localUUID: player1uuid })
        const player2 = await this.userModel.findOne({ localUUID: player2uuid })

        if (!player1 || !player2) throw new NotFoundException()

        const player1win = player1score > player2score

        const matchResult = Elorating.calculate(player1.elo, player2.elo, player1win)

        const NewMatch = new this.matchModel({
            player1uuid,
            player2uuid,
            player1score,
            player2score,
            player1win
        })
        
        if(player1win){
            player1.wins++;
            player2.losses++;
        } else {
            player1.losses++;
            player2.wins++;
        }

        //console.log(matchResult)
        
        //Player Rating is player1
        player1.elo = matchResult.playerRating

        //Opponent Rating is player2
        player2.elo = matchResult.opponentRating


        await player1.save()
        await player2.save()


        const result = await NewMatch.save();
        return result.id as string;
    }


}