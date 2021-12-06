import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class ChangeEmailDto {
  @ApiProperty({
    description: 'A valid email address must be provided',
  })
  @IsEmail({}, { message: 'Invalid Email Address' })
  email: string;
}
