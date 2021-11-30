import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { MinLength, IsEmail, IsString, IsOptional } from 'class-validator';
import { Country } from 'src/database/entities/enum';
// import { ToPhone } from 'src/phone.pipe';

export class RegisterDto {
  @ApiProperty({
    description: 'A valid business name must be provided',
  })
  @MinLength(3, {
    message: 'business name must not be less than 3 chars',
  })
  name: string;

  @ApiProperty({
    description: 'A valid email must be provided',
  })
  @IsEmail({}, { message: 'invalid email address' })
  email: string;

  @ApiProperty({
    description: 'A valid password must be provided',
  })
  @MinLength(8, {
    message: 'password should not be lesser than 8 chars',
  })
  password: string;

  /**
   * @todo
   * Fix 1: Validate phone number using "libphonenumber-js" package
   * Fix 2: Learn how to use class-validator IsPhoneNumber decorator
   */
  @ApiProperty({
    description: 'A valid phone number must be provided',
  })
  @IsString()
  phone: string;

  @ApiPropertyOptional({ enum: Country })
  @IsOptional()
  country?: Country;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  username?: string;
}
