import { GenericEntity } from 'src/libs/class/entity'
import { Column, Entity } from 'typeorm'

@Entity({
  name: 'users',
})
export class User extends GenericEntity {
  @Column()
  name: string

  @Column({unique:true})
  email: string

  @Column()
  password: string

  @Column({ default: 1 })
  typeUserId: number

  @Column({ default: null, nullable: true })
  code: string
}
