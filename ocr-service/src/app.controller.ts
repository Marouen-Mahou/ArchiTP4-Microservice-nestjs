import { Body, Controller, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @MessagePattern({cmd: 'app_request_event'})
    generateInitialScore(name: string): any {
        return this.appService.generateInitialScore(name);
    }
}
