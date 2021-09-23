import { BadRequestException, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

import * as bcrypt from 'bcrypt';
// https://github.com/academind/nestjs-introduction/blob/02-mongodb/src/products/products.service.ts
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>
  ) { }

  async getUsers() {
    return await this.userModel.find();
  }
  async getUser(_localUUID) {
    //const hash = await bcrypt.hash(_localUUID, 10)
    const user = await this.userModel.findOne({ localUUID: _localUUID })
    if (!user) throw new NotFoundException()
    return user;
  }

  async newUser(nick: string, _localUUID: string, firstName?: string, lastName?: string) {
    //const hash = await bcrypt.hash(_localUUID, 10)
    const NewUser = new this.userModel({
      nick,
      localUUID: _localUUID,
      firstName,
      lastName
    })
    const result = await NewUser.save();
    return result.id as string;
  }

  //async updateUser() { }

  //async deleteUser() { }
}
