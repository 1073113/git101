import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'After Merge, then add new Output A1 yes!';
  }
  getHelloWorld(): string {
    return 'This is A1 getHelloWorld!';
  }
  fromA3(): string {
    return 'This is from A3 branch commit! and 2n Commit from A3';
  }
}
