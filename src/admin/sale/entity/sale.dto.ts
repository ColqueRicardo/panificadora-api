import { GenericEntity } from 'src/libs/class/entity'
import { IsInt, IsNotEmpty, IsArray, ValidateNested, IsOptional, IsDecimal } from 'class-validator';
import { Type } from 'class-transformer';

class SaleProductDto {
  @IsInt()
  id: number;

  @IsInt()
  quantity: number;

  @IsDecimal()
  price: number;
}

export class CreateSaleDto {
  @IsInt()
  customerId: number;

  @IsNotEmpty()
  date: string;

  @IsOptional()
  @IsDecimal()
  total: number;

  @IsInt()
  discount: number;

  @IsInt()
  storeId: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SaleProductDto)
  products: SaleProductDto[];
}

export class CreateModelDto {
  @IsNotEmpty()
  model:CreateSaleDto
}


export class SaleDto extends GenericEntity {
}
