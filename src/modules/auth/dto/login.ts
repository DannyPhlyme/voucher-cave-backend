import { ApiProperty } from '@nestjs/swagger';
import { MinLength, IsEmail } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'A valid email must be provided',
  })
  @IsEmail({}, { message: 'invalid email address' })
  email: string;

  @ApiProperty({
    description: 'A valid password must be provided',
  })
  @MinLength(8, { message: 'password should not be lesser than 8 chars' })
  password: string;

  ip: string;
}
