import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
  user: User[] = [];

  //mongodb atlas
  //   constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

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
}
