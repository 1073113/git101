import { forwardRef, Module } from '@nestjs/common';
import { IntrudersService } from './intruders.service';
import { IntrudersController } from './intruders.controller';
import { UsersModule } from '../users/users.module';
import { MousepadModule } from '../mousepad/mousepad.module';
import { CategoriesModule } from '../categories/categories.module';

@Module({
  imports: [
    forwardRef(() => MousepadModule),
    forwardRef(() => UsersModule),
    forwardRef(() => CategoriesModule),
  ],
  controllers: [IntrudersController],
  providers: [IntrudersService],
  exports: [IntrudersService],
})
export class IntrudersModule {}
