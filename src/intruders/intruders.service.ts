import { Injectable } from '@nestjs/common';
import { CategoriesService } from '../categories/categories.service';
import { MousepadService } from '../mousepad/mousepad.service';
import { UsersService } from '../users/users.service';
import { CreateIntruderDto } from './dto/create-intruder.dto';
import { UpdateIntruderDto } from './dto/update-intruder.dto';

@Injectable()
export class IntrudersService {
  constructor(
    private readonly mousepadService: MousepadService,
    private readonly usersService: UsersService,
    private readonly categoriesService: CategoriesService,
  ) {}

  create(createIntruderDto: CreateIntruderDto) {
    return 'This action adds a new intruder';
  }

  findAll() {
    return `This action returns all intruders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} intruder`;
  }

  update(id: number, updateIntruderDto: UpdateIntruderDto) {
    return `This action updates a #${id} intruder`;
  }

  remove(id: number) {
    return `This action removes a #${id} intruder`;
  }
}
