import { Body, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //get gender and bob
  @Post('idinfor')
  async getIDAndGender(@Body('idNumber') idNumber: number) {
    const data = await this.userService.userDobAndGender(idNumber);
    return { data };
  }
}
