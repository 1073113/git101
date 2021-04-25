import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CategoriesModule } from '../categories/categories.module';
import { MousepadModule } from '../mousepad/mousepad.module';
import { IntrudersModule } from '../intruders/intruders.module';

@Module({
  imports: [CategoriesModule, MousepadModule, IntrudersModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
