import { ApiProperty } from '@nestjs/swagger';
import { MinLength } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    description: 'A valid name must be provided',
  })
  @MinLength(3, {
    message: 'name cannot be less than chars',
  })
  name: string;
}
