import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { MousepadModule } from './mousepad/mousepad.module';
import { IntrudersModule } from './intruders/intruders.module';

@Module({
  imports: [
    AuthModule,
    CategoriesModule,
    UsersModule,
    MousepadModule,
    IntrudersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
