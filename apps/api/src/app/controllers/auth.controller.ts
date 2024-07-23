import { Body, Controller, Post } from '@nestjs/common';
import { AccountLogin, AccountRegister } from '@school/contracts';

@Controller('auth')
export class AuthController {
  constructor() { }

  @Post('register')
  async register(@Body() dto: AccountRegister.Request): Promise<AccountRegister.Response> {
  }

  @Post('login')
  async login(@Body() { email, password }: AccountLogin.Request): Promise<AccountLogin.Response> {
  }
}
