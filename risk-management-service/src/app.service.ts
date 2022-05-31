import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('LOAN_SERVICE') private client: ClientProxy){}

  async riskCheck(data:any){
      console.log(`Risk check for ${name} is done !`)

       this.client.emit('final-score-attributed-event', data);
  }
}
