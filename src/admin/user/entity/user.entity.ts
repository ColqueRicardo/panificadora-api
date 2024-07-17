import { GenericEntity } from 'src/libs/class/entity'
import { Column, Entity } from 'typeorm'

@Entity({
  name: 'users',
})
export class User extends GenericEntity {
  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string
}
