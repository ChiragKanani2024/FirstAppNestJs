import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsEnum(['ENGINEER', 'ADMIN', 'INTERN'], {
    message: 'Role have to be only ["ENGINEER", "ADMIN", "INTERN"]',
  })
  role: 'ENGINEER' | 'ADMIN' | 'INTERN';
}
