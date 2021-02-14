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

  @Get('getA2toBlockA3Space')
  getA2toBlockA3Space(): string {
    return this.appService.getA2toBlockA3Space();
  }
}
