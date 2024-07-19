import { GenericEntity } from 'src/libs/class/entity'
import { IsInt, IsNotEmpty, IsArray, ValidateNested, IsOptional, IsDecimal } from 'class-validator';
import { Type } from 'class-transformer';
import { ListPageDto } from 'src/libs/class/generic.dto';

class SaleProductDto {
  @IsInt()
  id: number;

  @IsInt()
  quantity: number;

  @IsDecimal()
  price: number;

  @IsOptional()
  name: string
}

export class CustomSaleDto {
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

  @IsOptional()
  customerName: string

  @IsOptional()
  storeName: string
}

export class CreateModelDto {
  @IsNotEmpty()
  model: CustomSaleDto
}


export class SaleDto extends GenericEntity {
  customerName: string
  storeName: string
}
