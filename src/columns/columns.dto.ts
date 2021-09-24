import { ApiProperty } from '@nestjs/swagger';

export class CreateColumnDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  userId: number;
}

export class DeleteColumnDto {
    @ApiProperty()
    id: number;
  }

export class GetColumnByIdDto {
    @ApiProperty()
    id: number;
}