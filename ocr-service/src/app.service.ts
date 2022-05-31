import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('LOAN_SERVICE') private client: ClientProxy){}

  async checkOCR(data:any){
      console.log(`OCR for ${data.name} is checked !`)

       this.client.emit('ocr-finished-event', data);
  }
}
