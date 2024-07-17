import { GenericEntity } from 'src/libs/class/entity'
import { Entity } from 'typeorm'

@Entity({
  name: 'movements',
})
export class Movement extends GenericEntity {


}
