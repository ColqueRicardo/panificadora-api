import { Customer } from 'src/admin/customer/entity/customer.entity'
import { Movement } from 'src/admin/movement/entity/movement.entity'
import { SaleDetail } from 'src/admin/sale-detail/entity/sale-detail.entity'
import { Store } from 'src/admin/store/entity/store.entity'
import { GenericEntity } from 'src/libs/class/entity'
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm'

@Entity({
  name: 'sales',
})
export class Sale extends GenericEntity {

  @Column()
  id: number

  @Column()
  customerId: number

  @Column()
  date: Date

  @Column()
  total: number

  @Column()
  discount: number

  @Column()
  storeId: number

  @ManyToOne(() => Customer, customer => customer.sales)
  @JoinColumn({ name: 'customerId' })
  customer: Promise<Customer>

  @OneToMany(() => SaleDetail, saleDetail => saleDetail.sale)
  saleDetails: Promise<SaleDetail[]>

  @ManyToOne(() => Store, store => store.sales)
  @JoinColumn({ name: 'storeId' })
  store: Promise<Store>

  @OneToOne(() => Movement, movement => movement.sale)
  movement: Promise<Movement>
}
