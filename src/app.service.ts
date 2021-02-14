import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'This is A2 Branch, 2nd Commit yeah';
  }
  getHelloWorld(): string {
    return 'This is A2 , 2nd Commit yeah!';
  }
  getA2toBlockA3Space(): string {
    return 'This is A2 , 2nd Commit yeah!';
  }
}
