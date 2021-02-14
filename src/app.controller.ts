import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getHelloWorld')
  getHelloWorld(): string {
    return this.appService.getHelloWorld();
  }
  @Get('fromA3Branch')
  fromA3(): string {
    return this.appService.fromA3();
  }
}
