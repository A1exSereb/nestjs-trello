import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import { CreateColumnDto } from './columns.dto';
import { Columns } from './columns.entity';

@Injectable()
export class ColumnService {
  private lastColumnId = 0;
  private readonly columns: Columns[] = [];

  getColumnsById(id:number) {
    const columns = this.columns.filter(column => column.userId === id);
    if (columns) {
      return columns;
    }
    throw new HttpException('Columns not found', HttpStatus.NOT_FOUND);
  }

  deleteColumn(id: number) {
    return this.columns.filter(column => column.id === id? null : column);
  }

  createColumn(params:CreateColumnDto) {
    const newColumn = {...params, id: ++this.lastColumnId};
    this.columns.push(newColumn);
    return newColumn;
  }
}