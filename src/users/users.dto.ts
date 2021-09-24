import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  full_name: string;
}

export class DeleteUserDto {
    @ApiProperty()
    id: number;
  }

export class GetUserDto {
    @ApiProperty()
    email: string;
  
    @ApiProperty()
    password: string;
}