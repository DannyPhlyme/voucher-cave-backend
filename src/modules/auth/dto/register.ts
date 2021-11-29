import { MinLength, IsEmail, IsString, IsOptional } from 'class-validator';
// import { ToPhone } from 'src/phone.pipe';

export class RegisterDto {
  @MinLength(3, {
    message: 'business name should not be less than 3 chars',
  })
  name: string;

  @IsEmail({}, { message: 'invalid email address' })
  email: string;

  @MinLength(8, {
    message: 'password should not be lesser than 8 chars',
  })
  password: string;

  /**
   * @todo
   * Fix 1: Validate phone number using "libphonenumber-js" package
   * Fix 2: Learn how to use class-validator IsPhoneNumber decorator
   */
  @IsString()
  phone: string;

  @IsOptional()
  country?: string;

  @IsString()
  @IsOptional()
  username?: string;
}
