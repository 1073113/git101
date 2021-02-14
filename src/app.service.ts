import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'A2 Branch new yeah';
  }
  getHelloWorld(): string {
    return 'This is A2 getHelloWorld, yeah!';
  }
}
