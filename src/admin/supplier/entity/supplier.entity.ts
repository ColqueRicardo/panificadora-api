import { Purchase } from 'src/admin/purchase/entity/purchase.entity'
import { SupplierProduct } from 'src/admin/supplier-product/entity/supplier-product.entity'
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

  @OneToMany(() => SupplierProduct,supplierProduct => supplierProduct.supplier)
  supplierProducts: Promise<SupplierProduct[]>

  @OneToMany(() => Purchase, product => product.supplier)
  purchases: Promise<Purchase[]>
}
