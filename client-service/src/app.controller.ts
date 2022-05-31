import { Body, Controller, Post } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @EventPattern('intial-score-attributed-event')
    async getInitialScoreAttributed(data: Record<string, unknown>) {
        return `your inital score is  ${data.score}`;
    }
    
    @EventPattern('final-score-attributed-event')
    async getFinalScoreAttributed(data: Record<string, unknown>) {
        return `your final score is  ${data.score}`;
    }

    @Post("/start-procedure")
    async startProcedure(@Body() body) {
        return this.appService.startProcedure(body.name)
    }
}
