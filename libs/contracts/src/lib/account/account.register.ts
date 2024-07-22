export namespace AccountRegister {
  // how to name topics: service_name.command_name.type (last: command, even, query)
  export const topic = 'account.register.command'

  export class Request {
    email: string;
    password: string;
    displayName?: string;
  }

  export class Response {
    email: string;
  }
}
