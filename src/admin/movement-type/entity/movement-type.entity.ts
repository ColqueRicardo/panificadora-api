import { Movement } from 'src/admin/movement/entity/movement.entity'
import { GenericEntity } from 'src/libs/class/entity'
import { Column, Entity, OneToMany } from 'typeorm'

@Entity({
  name: 'movementTypes',
})
export class MovementType extends GenericEntity {
  @Column()
  name: string

  @Column()
  description: string

  @OneToMany(() => Movement, movement => movement.movementType)
  movements: Promise<Movement[]>
}
