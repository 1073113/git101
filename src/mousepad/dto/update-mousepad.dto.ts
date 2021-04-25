import { PartialType } from '@nestjs/mapped-types';
import { CreateMousepadDto } from './create-mousepad.dto';

export class UpdateMousepadDto extends PartialType(CreateMousepadDto) {}
