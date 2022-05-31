import { Body, Controller, Post } from '@nestjs/common';
import { MessagePattern, EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @EventPattern('intial-score-attributed-event')
    async riskCheck(data: Record<string, unknown>) {
        return this.appService.riskCheck(data);
    }
}
