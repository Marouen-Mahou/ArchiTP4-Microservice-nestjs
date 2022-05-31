import { Body, Controller, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @EventPattern('final-score-attributed-event')
    async credit(data: Record<string, unknown>) {
        return this.appService.credit(data);
    }
}
