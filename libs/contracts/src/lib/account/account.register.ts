import { IsEmail, IsOptional, IsString } from 'class-validator';

export namespace AccountRegister {
  // how to name topics: service_name.command_name.type (last: command, even, query)
  export const topic = 'account.register.command'

  export class Request {
    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsOptional()
    @IsString()
    displayName?: string;
  }

  export class Response {
    email: string;
  }
}
