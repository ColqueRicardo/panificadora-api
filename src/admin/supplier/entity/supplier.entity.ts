import { Product } from 'src/admin/product/entity/product.entity'
import { Purchase } from 'src/admin/purchase/entity/purchase.entity'
import { GenericEntity } from 'src/libs/class/entity'
import { Column, Entity, OneToMany } from 'typeorm'

@Entity({
  name: 'suppliers',
})
export class Supplier extends GenericEntity {
  @Column()
  name: string

  @Column()
  contact: string

  @Column()
  phone: string

  @Column()
  email: string

  @Column()
  address: string

  @OneToMany(() => Product, product => product.supplier)
  products: Promise<Product[]>

  @OneToMany(() => Purchase, product => product.supplier)
  purchases: Promise<Purchase[]>
}
