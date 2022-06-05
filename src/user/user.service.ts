import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LocalUser, User } from './user.model';

@Injectable()
export class UserService {
  //   mongodb atlas
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  //using to get gender and dob
  async userDobAndGender(idNumber: number) {
    const num = idNumber;

    const first2Digits = num.toString()[0] + num.toString()[1];
    const numberOfDaysDigits =
      num.toString()[2] + num.toString()[3] + num.toString()[4];
    const year = parseInt('19' + first2Digits);
    const intNumberOfDays = parseInt(numberOfDaysDigits);

    const gender = intNumberOfDays < 500 ? 'Male' : 'Female';

    let numberOfDays = 0;

    if (gender === 'Female') {
      numberOfDays = intNumberOfDays - 500;
    } else {
      numberOfDays = intNumberOfDays;
    }

    const dob = new Date(year, 0, numberOfDays);

    const formatedDob =
      '' + year + '-' + (dob.getMonth() + 1) + '-' + dob.getDate();

    return {
      gender,
      dob: formatedDob,
    };
  }

  //using to store data in mongodb atlas
  async insertUser(email: String, password: String) {
    const newUser = new this.userModel({
      email,
      password,
    });
    const result = await newUser.save();

    return result.id as string;
  }

  //find user in mongodb atlas
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userModel.findOne({ email });
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return true;
    }
    return null;
  }
}
