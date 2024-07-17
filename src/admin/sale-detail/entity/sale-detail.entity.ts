import { GenericEntity } from 'src/libs/class/entity'
import { Entity } from 'typeorm'

@Entity({
  name: 'saleDetails',
})
export class SaleDetail extends GenericEntity {
}
