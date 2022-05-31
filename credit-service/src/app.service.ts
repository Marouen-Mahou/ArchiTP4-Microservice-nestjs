import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('LOAN_SERVICE') private client: ClientProxy){}

  async credit(data:any){
      console.log(`${data.name} is credited !`)
      return 'credited'
  }
}
