import { PurchaseDetail } from 'src/admin/purchase-detail/entity/purchase-detail.entity'
import { Supplier } from 'src/admin/supplier/entity/supplier.entity'
import { GenericEntity } from 'src/libs/class/entity'
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm'

@Entity({
  name: 'purchases',
})
export class Purchase extends GenericEntity {
  @Column()
  id: number

  @Column()
  productId: number

  @Column()
  quantity: number
  @Column()
  date: Date

  @Column()
  supplierId: number

  @ManyToOne(() => Supplier, supplier => supplier.purchases)
  @JoinColumn({ name: 'supplierId' })
  supplier: Promise<Supplier>

  @OneToMany(() => PurchaseDetail, purchaseDetail => purchaseDetail.purchase)
  purchaseDetails: Promise<PurchaseDetail>

}
