import { GenericEntity } from 'src/libs/class/entity'
import { Entity } from 'typeorm'

@Entity({
  name: 'stores',
})
export class Store extends GenericEntity {
}
