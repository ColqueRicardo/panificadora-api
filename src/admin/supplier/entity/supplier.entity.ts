import { GenericEntity } from 'src/libs/class/entity'
import { Entity } from 'typeorm'

@Entity({
  name: 'suppliers',
})
export class Supplier extends GenericEntity {
}
