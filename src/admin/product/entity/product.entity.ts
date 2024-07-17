import { GenericEntity } from 'src/libs/class/entity'
import { Column, Entity } from 'typeorm'

@Entity({
  name: 'products',
})
export class Product extends GenericEntity {
  @Column()
  name:string
}
