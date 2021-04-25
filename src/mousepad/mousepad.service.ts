import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CategoriesService } from '../categories/categories.service';
import { UsersService } from '../users/users.service';
import { CreateMousepadDto } from './dto/create-mousepad.dto';
import { UpdateMousepadDto } from './dto/update-mousepad.dto';

@Injectable()
export class MousepadService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    @Inject(forwardRef(() => CategoriesService))
    private readonly categoriesService: CategoriesService,
  ) {}

  create(createMousepadDto: CreateMousepadDto) {
    return 'This action adds a new mousepad';
  }

  findAll() {
    return `This action returns all mousepad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mousepad`;
  }

  update(id: number, updateMousepadDto: UpdateMousepadDto) {
    return `This action updates a #${id} mousepad`;
  }

  remove(id: number) {
    return `This action removes a #${id} mousepad`;
  }
}
