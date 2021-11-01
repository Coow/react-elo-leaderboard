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
        @Body('team1') team1: Array<{teamuuid}>,
        @Body('team2') team2: Array<{teamuuid}>
    ) {

    }

    @Post('end')
    async matchEnd(
        @Body('team1') team1: Array<{localUUID: string}>,
        @Body('team1score') team1score: number,
        @Body('team2') team2: Array<{localUUID: string}>,
        @Body('team2score') team2score: number
    ) {
        const match = await this.matchService.endMatch(
            team1,
            team1score,
            team2,
            team2score,
        )

        return { id: match }
    }
}
