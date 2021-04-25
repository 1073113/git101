import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { MousepadService } from './mousepad.service';
import { CreateMousepadDto } from './dto/create-mousepad.dto';
import { UpdateMousepadDto } from './dto/update-mousepad.dto';

@Controller('mousepad')
export class MousepadController {
  constructor(private readonly mousepadService: MousepadService) {}

  @Post()
  create(@Body() createMousepadDto: CreateMousepadDto) {
    return this.mousepadService.create(createMousepadDto);
  }

  @Get()
  findAll() {
    return this.mousepadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mousepadService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMousepadDto: UpdateMousepadDto) {
    return this.mousepadService.update(+id, updateMousepadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mousepadService.remove(+id);
  }
}
