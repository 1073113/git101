import { PartialType } from '@nestjs/mapped-types';
import { CreateIntruderDto } from './create-intruder.dto';

export class UpdateIntruderDto extends PartialType(CreateIntruderDto) {}
