import { GenericEntity } from 'src/libs/class/entity'
import { Entity } from 'typeorm'

@Entity({
  name: 'purchases',
})
export class Purchase extends GenericEntity {
}
