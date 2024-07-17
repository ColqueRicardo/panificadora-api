import { GenericEntity } from 'src/libs/class/entity'
import { Column, Entity } from 'typeorm'

@Entity({
  name: 'stores',
})
export class Store extends GenericEntity {

  @Column()
  name: string

  @Column()
  address: string
}
