import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { IntrudersService } from './intruders.service';
import { CreateIntruderDto } from './dto/create-intruder.dto';
import { UpdateIntruderDto } from './dto/update-intruder.dto';

@Controller('intruders')
export class IntrudersController {
  constructor(private readonly intrudersService: IntrudersService) {}

  @Post()
  create(@Body() createIntruderDto: CreateIntruderDto) {
    return this.intrudersService.create(createIntruderDto);
  }

  @Get()
  findAll() {
    return this.intrudersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.intrudersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateIntruderDto: UpdateIntruderDto) {
    return this.intrudersService.update(+id, updateIntruderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.intrudersService.remove(+id);
  }
}
