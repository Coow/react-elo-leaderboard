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

    async endMatch(team1: Array<{ localUUID: string }>, team1score: number, team2: Array<{ localUUID: string }>, team2score: number) {
        if (team1 == team2) {
            throw new NotAcceptableException()
        }

        if (!team1.length || !team2.length) throw new NotFoundException()

        const allPlayers = team1.concat(team2)

        //Validate all of the players in the game
        for (var i = 0; i < allPlayers.length; i++) {
            //I have literally no idea why this casting works.. But it does.. So I dont complain
            const _player = await this.userModel.findOne({ localUUID: allPlayers[i] as unknown as string })

            if (!_player) {
                throw new NotAcceptableException();
            }
        }

        var team1elo = 0
        var team2elo = 0

        for (let i = 0; i < team1.length; i++) {
            var player = await this.userModel.findOne({ localUUID: team1[i] as unknown as string })
            team1elo += player.elo
        }

        for (let i = 0; i < team2.length; i++) {
            var player = await this.userModel.findOne({ localUUID: team2[i] as unknown as string })
            team2elo += player.elo
        }

        team1elo = Math.round(team1elo / team1.length)
        team2elo = Math.round(team2elo / team2.length)

        const team1win = team1score > team2score ? 1 : 0;

        const NewMatch = new this.matchModel({
            team1,
            team2,
            team1score,
            team2score,
            team1win
        })

        if (team1win === 1) {
            console.log(team1)
            //Inc wins for team 1
            for (let i = 0; i < team1.length; i++) {
                await this.userModel.findOneAndUpdate(
                    { localUUID: team1[i] as unknown as string },
                    { $inc: { 'wins': 1 } })
            }

            //Inc losses for team 2
            for (let i = 0; i < team2.length; i++) {
                await this.userModel.findOneAndUpdate(
                    { localUUID: team2[i] as unknown as string },
                    { $inc: { 'losses': 1 } })
            }

            //this.userModel.updateMany(
            //    { localUUID: {$in: team1} },
            //    { $inc: { 'wins': 1 } })

        } else {
            //Inc wins for team 2
            for (let i = 0; i < team2.length; i++) {
                await this.userModel.findOneAndUpdate(
                    { localUUID: team2[i] as unknown as string },
                    { $inc: { 'wins': 1 } })
            }

            //Inc losses for team 1
            for (let i = 0; i < team1.length; i++) {
                await this.userModel.findOneAndUpdate(
                    { localUUID: team1[i] as unknown as string },
                    { $inc: { 'losses': 1 } })
            }
        }

        var eloChangeResult = []

        //Calculate elo change for players in team 1
        for (let i = 0; i < team1.length; i++) {
            var player = await this.userModel.findOne({ localUUID: team1[i] as unknown as string })
            var change = await this.CalculateRatingTransfer(player.elo, team2elo, team1win, player.kFactor)

            player.elo += change
            await player.save()

            eloChangeResult.push({
                team: "team1",
                player: team1[i],
                change
            })
        }

        //calculate elo change for players in team 2
        for (let i = 0; i < team2.length; i++) {
            var player = await this.userModel.findOne({ localUUID: team2[i] as unknown as string })
            var change = await this.CalculateRatingTransfer(player.elo, team1elo, !team1win, player.kFactor)
            
            player.elo += change
            await player.save()

            eloChangeResult.push({
                team: "team2",
                player: team2[i],
                change
            })
        }

        const result = await NewMatch.save();

        return eloChangeResult;

        //return result.id as string;
    }

    async CalculateRatingTransfer(rating, opponentRating, score, kfactor) {
        // Transformed ratings:
        var rPlayer = Math.pow(10, rating / 400);
        var rOpponent = Math.pow(10, opponentRating / 400);

        // Expected win chance:
        var ePlayer = rPlayer / (rPlayer + rOpponent);

        // K-factor, measure of impact:
        var K = kfactor;
        console.log(Math.round(K * (score - ePlayer)))
        return Math.round(K * (score - ePlayer));
        
    }
}