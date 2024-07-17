import { GenericEntity } from 'src/libs/class/entity'
import { Entity } from 'typeorm'

@Entity({
  name: 'purchaseDetails',
})
export class PurchaseDetail extends GenericEntity {
}
