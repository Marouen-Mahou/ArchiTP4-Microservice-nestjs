import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('LOAN_SERVICE') private client: ClientProxy){}

  async startProcedure(name:string){
      return this.client.send({cmd: 'app_request_event'}, name);
  }
}
