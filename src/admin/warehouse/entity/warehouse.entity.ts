import { GenericEntity } from 'src/libs/class/entity'
import { Entity } from 'typeorm'

@Entity({
  name: 'Warehouses',
})
export class Warehouse extends GenericEntity {
}
