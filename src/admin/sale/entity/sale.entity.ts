import { GenericEntity } from 'src/libs/class/entity'
import { Entity } from 'typeorm'

@Entity({
  name: 'sales',
})
export class Sale extends GenericEntity {
}
