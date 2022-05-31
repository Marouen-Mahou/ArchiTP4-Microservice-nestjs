import { Body, Controller, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @MessagePattern({cmd: 'ocr-finished-event'})
    generateInitialScore(name: string): any {
        return this.appService.generateInitialScore(name);
    }

    @MessagePattern({cmd: 'app_request_event'})
    initiateOCR(name: string): any {
        return this.appService.initiateOCR(name);
    }
}
