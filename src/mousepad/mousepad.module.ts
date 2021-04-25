import { forwardRef, Module } from '@nestjs/common';
import { MousepadService } from './mousepad.service';
import { MousepadController } from './mousepad.controller';
import { CategoriesModule } from '../categories/categories.module';
import { UsersModule } from '../users/users.module';
import { IntrudersModule } from '../intruders/intruders.module';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    forwardRef(() => CategoriesModule),
    IntrudersModule,
  ],
  controllers: [MousepadController],
  providers: [MousepadService],
  exports: [MousepadService],
})
export class MousepadModule {}
