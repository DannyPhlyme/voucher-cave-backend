import { ApiProperty } from '@nestjs/swagger';
import { MinLength, IsEmail, IsNotEmpty } from 'class-validator';

export class ChangePasswordDto {
  @ApiProperty({
    description: 'A valid password must be provided',
  })
  @IsNotEmpty()
  @MinLength(8, {
    message: 'password must be more than 8 chars',
  })
  old_password: string;

  @ApiProperty({
    description: 'Both passwords must match',
  })
  @IsNotEmpty()
  @MinLength(8, {
    message: 'password must be more than 8 chars',
  })
  new_password: string;
}

export class ForgotPasswordDto {
  @ApiProperty({
    description: 'A valid email address must be provided',
  })
  @IsNotEmpty()
  @IsEmail({}, { message: 'invalid email address' })
  email: string;
}
