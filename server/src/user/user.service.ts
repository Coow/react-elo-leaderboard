import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

// https://github.com/academind/nestjs-introduction/blob/02-mongodb/src/products/products.service.ts
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // async newUser() { }

  async getUsers() {
    const users = await this.userModel.find();
    return users;
  }
  
  //async getUser() { }

  //async updateUser() { }

  //async deleteUser() { }
}
