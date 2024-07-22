export namespace AccountLogin {
  // how to name topics: service_name.command_name.type (last: command, even, query)
  export const topic = 'account.login.command'

  export class Request {
    email: string;
    password: string;
  }

  export class Response {
    access_token: string;
  }
}
