import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { MousepadService } from '../mousepad/mousepad.service';
import { UsersService } from '../users/users.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    private readonly mousepadService: MousepadService,
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  findAll() {
    return `This action returns all categories`;
  }

  create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category, I know it will change';
  }

  undo(createCategoryDto: CreateCategoryDto) {
    return 'This action adds undo, I know it will change yup from main';
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update1(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  update2(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  update3(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
