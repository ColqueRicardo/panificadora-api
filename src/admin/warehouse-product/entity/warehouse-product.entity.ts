import { GenericEntity } from 'src/libs/class/entity'
import { Entity } from 'typeorm'

@Entity({
  name: 'WarehouseProducts',
})
export class WarehouseProduct extends GenericEntity {
}
