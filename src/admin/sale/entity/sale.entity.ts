import { Customer } from 'src/admin/customer/entity/customer.entity'
import { SaleDetail } from 'src/admin/sale-detail/entity/sale-detail.entity'
import { GenericEntity } from 'src/libs/class/entity'
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm'

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

  @ManyToOne(() => Customer, customer => customer.sales)
  @JoinColumn({ name: 'customerId' })
  customer: Promise<Customer>

  @OneToMany(() => SaleDetail, saleDetail => saleDetail.sale)
  saleDetails: Promise<SaleDetail[]>
}
