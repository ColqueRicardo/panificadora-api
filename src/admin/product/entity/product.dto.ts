import { IsNumber } from 'class-validator'
import { GenericEntity } from 'src/libs/class/entity'

export class ProductDto extends GenericEntity {
  @IsNumber({ maxDecimalPlaces: 2 })
  price: number
}
