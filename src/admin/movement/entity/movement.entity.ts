import { MovementType } from 'src/admin/movement-type/entity/movement-type.entity'
import { Purchase } from 'src/admin/purchase/entity/purchase.entity'
import { Sale } from 'src/admin/sale/entity/sale.entity'
import { GenericEntity } from 'src/libs/class/entity'
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm'

@Entity({
  name: 'movements',
})
export class Movement extends GenericEntity {

  @Column()
  movementTypeId: number

  @Column()
  purchaseId: number

  @Column()
  saleId: number

  @ManyToOne(() => MovementType, movementType => movementType.movements)
  @JoinColumn({ name: 'movementTypeId' })
  movementType: Promise<MovementType>

  @OneToOne(() => Purchase, purchase => purchase.movement)
  @JoinColumn({ name: 'purchaseId' })
  purchase: Promise<Purchase>

  @OneToOne(() => Sale, sale => sale.movement)
  @JoinColumn({ name: 'saleId' })
  sale: Promise<Sale>

}
