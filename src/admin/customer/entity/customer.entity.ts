import { GenericEntity } from 'src/libs/class/entity'
import { Entity } from 'typeorm'

@Entity({
  name: 'customers',
})
export class Customer extends GenericEntity {
}
