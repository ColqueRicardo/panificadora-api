import { TypeUser } from 'src/admin/type-user/entity/type-user.entity'
import { GenericEntity } from 'src/libs/class/entity'
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'

@Entity({
  name: 'users',
})
export class User extends GenericEntity {
  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @Column()
  typeUserId: number

  @Column({ default: null, nullable: true })
  code: string

  @ManyToOne(() => TypeUser, typeUser =>typeUser.users)
  @JoinColumn({ name: 'typeUserId' })
  typeUser: Promise<TypeUser>

}
