import { Product } from 'src/admin/product/entity/product.entity'
import { Purchase } from 'src/admin/purchase/entity/purchase.entity'
import { GenericEntity } from 'src/libs/class/entity'
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'

@Entity({
  name: 'purchaseDetails',
})
export class PurchaseDetail extends GenericEntity {

  @Column()
  id: number

  @Column()
  purchaseId: number

  @Column()
  productId: number

  @Column()
  quantity: number

  @Column()
  price: number

  @ManyToOne(() => Purchase, purchase => purchase.purchaseDetails)
  @JoinColumn({ name: 'purchaseId' })
  purchase: Promise<Purchase>

  @ManyToOne(() => Product, product => product.purchaseDetails)
  @JoinColumn({ name: 'productId' })
  product: Promise<Product>
}
