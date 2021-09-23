import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }
  @Get('user')
  async getUser(@Body('localUUID') localUUID: string) {
    return this.userService.getUser(localUUID);
  }

  @Post()
  async newUser(
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('nick') nick: string,
    @Body('localUUID') localUUID: string,
  ) {
    const user = await this.userService.newUser(
      nick, localUUID, firstName, lastName
    )
    return {id: user}
  }

  //async updateUser() { }

  //async deleteUser() { }
}
