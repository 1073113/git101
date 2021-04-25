import { forwardRef, Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { MousepadModule } from '../mousepad/mousepad.module';
import { UsersModule } from '../users/users.module';
import { IntrudersModule } from '../intruders/intruders.module';

@Module({
  imports: [IntrudersModule, MousepadModule, forwardRef(() => UsersModule)],
  controllers: [CategoriesController],
  providers: [CategoriesService],
  exports: [CategoriesService],
})
export class CategoriesModule {}
