import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class ResetPasswordDto {
  @ApiProperty({
    description: 'A valid password must be provided',
  })
  @MinLength(8, {
    message: 'password must be more than 8 chars',
  })
  password: string;
}

export class TokenDto {
  @ApiProperty()
  token?: string;

  @ApiProperty()
  @IsNotEmpty()
  refresh_token?: string;
}

export class resendVerificationDto {
  @ApiProperty()
  @IsString()
  user_id: string;
}
