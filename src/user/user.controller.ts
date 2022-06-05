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

  // insert data to mongodb atlas
  @Post('signup')
  async signUp(
    @Body('email') userEmail: string,
    @Body('password') userPass: string,
  ) {
    console.log('first', userEmail, userPass);
    const generatedId = await this.userService.insertUser(userEmail, userPass);
    return { id: generatedId };
  }

  @Post('signin')
  async signIn(
    @Body('email') userEmail: string,
    @Body('password') userPass: string,
  ) {
    const user = await this.userService.validateUser(userEmail, userPass);
    return user;
  }
}
