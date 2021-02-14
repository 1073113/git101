import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'After Merge, then add new Output A1 yes!';
  }
  getHelloWorld(): string {
    return 'This is A1 getHelloWorld!';
  }
}
