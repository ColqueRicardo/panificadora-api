import { Movement } from 'src/admin/movement/entity/movement.entity'
import { PurchaseDetail } from 'src/admin/purchase-detail/entity/purchase-detail.entity'
import { Supplier } from 'src/admin/supplier/entity/supplier.entity'
import { Warehouse } from 'src/admin/warehouse/entity/warehouse.entity'
import { GenericEntity } from 'src/libs/class/entity'
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm'

@Entity({
  name: 'purchases',
})
export class Purchase extends GenericEntity {
  @Column()
  id: number

  @Column()
  total: number

  @Column()
  date: Date

  @Column()
  supplierId: number

  @Column()
  warehouseId: number

  @ManyToOne(() => Supplier, supplier => supplier.purchases)
  @JoinColumn({ name: 'supplierId' })
  supplier: Promise<Supplier>

  @ManyToOne(() => Warehouse, warehouse => warehouse.purchases)
  @JoinColumn({ name: 'warehouseId' })
  warehouse: Promise<Warehouse>

  @OneToMany(() => PurchaseDetail, purchaseDetail => purchaseDetail.purchase)
  purchaseDetails: Promise<PurchaseDetail>

  @OneToOne(() => Movement, movement => movement.purchase)
  movement: Promise<Movement>
}
