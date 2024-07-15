import { IsIn, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { IsArray, IsInt, ValidateNested } from 'class-validator';

export class OrderDto {
  @IsString()
  key: string;

  @IsIn(['ASC', 'DESC'])
  order: 'ASC' | 'DESC';
}

export class FiltersDto {
  @IsString()
  key: string;

  @IsOptional()
  value?: any;
}


export class ListPageDto {
  @IsInt()
  page: number;

  @IsInt()
  limit: number;

  @ValidateNested()
  @Type(() => OrderDto)
  order: OrderDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FiltersDto)
  filters: FiltersDto[];
}

export class ListPage {
  count: number
  totalPage: number
  limit: number
  page: number
  records: any[]
}