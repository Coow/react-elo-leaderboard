import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

// https://github.com/academind/nestjs-introduction/blob/02-mongodb/src/products/products.service.ts
@Injectable()
export class UserService {
  @InjectModel('User') private readonly userModel: Model<User>;
}
