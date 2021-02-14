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
  fromA3(): string {
    return 'This is from A3 branch commit! and 2n Commit from A3';
  }

  A5FromA4(): string {
    return 'A5fromA4';
  }

  A8FromA5(): string {
    return 'A8FromA5';
  }
}
