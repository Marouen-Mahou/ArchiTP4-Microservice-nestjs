import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('LOAN_SERVICE') private client: ClientProxy){}

  async generateInitialScore(name:any){
      console.log(`Eligiblity of the borrower ${name} checked !`)
      console.log(`Initial score is attributed to ${name} checked !`)

      //Send initial score to the broker
       this.client.emit('initial-score-attributed-event', {'name': name, 'score': Math.random()});
  }

  async initiateOCR(name:any){
    //Send file to OCR microservice
     this.client.emit('ocr-ready-event', {name: 'name'})
}
}
