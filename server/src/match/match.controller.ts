import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { MatchService } from './match.service'

@Controller('match')
export class MatchController {
    constructor(private readonly matchService: MatchService) { }

    @Get()
    //Only allows asc and desc
    //Default asc, where oldest is first
    async getUsers(
        @Query('sort') sort?: string
    ) {
      return this.matchService.getMatches(sort);
    }

    @Post('start')
    async matchStart(
        @Body('player1uuid') player1uuid: string,
        @Body('player2uuid') player2uuid: string
    ) {

    }

    @Post('end')
    async matchEnd(
        @Body('player1uuid') player1uuid: string,
        @Body('player1score') player1score: number,
        @Body('player2uuid') player2uuid: string,
        @Body('player2score') player2score: number
    ) {
        const match = await this.matchService.endMatch(
            player1uuid,
            player1score,
            player2uuid,
            player2score,
        )

        return { id: match }
    }
}
