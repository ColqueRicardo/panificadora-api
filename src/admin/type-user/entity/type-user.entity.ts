import { User } from 'src/admin/user/entity/user.entity'
import { GenericEntity } from 'src/libs/class/entity'
import { Column, Entity, OneToMany } from 'typeorm'

@Entity({
  name: 'typeUsers',
})
export class TypeUser extends GenericEntity {
  @Column({ unique: true })
  name: string

  @Column()
  description: string

  @OneToMany(() => User, user => user.typeUser)
  users: Promise<User[]>
}
