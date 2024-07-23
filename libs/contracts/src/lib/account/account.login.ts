import { IsEmail, IsString } from 'class-validator';

export namespace AccountLogin {
  // how to name topics: service_name.command_name.type (last: command, even, query)
  export const topic = 'account.login.command'

  export class Request {
    @IsEmail()
    email: string;

    @IsString()
    password: string;
  }

  export class Response {
    access_token: string;
  }
}
