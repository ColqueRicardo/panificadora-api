import { Product } from 'src/admin/product/entity/product.entity'
import { Supplier } from 'src/admin/supplier/entity/supplier.entity'
import { GenericEntity } from 'src/libs/class/entity'
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'

@Entity({
  name: 'supplierProducts',
})
export class SupplierProduct extends GenericEntity {

  @Column({ nullable: false, type: "float", default: 0.0 })
  price: number

  @Column()
  quantityAvailable:number

  @Column({ default: null, nullable: true })
  discount: number

  @Column()
  supplierId: number

  @Column()
  productId: number

  @ManyToOne(() => Supplier, supplier => supplier.supplierProducts)
  @JoinColumn({ name: 'supplierId' })
  supplier: Promise<Supplier>

  @ManyToOne(() => Product, supplier => supplier.supplierProduct)
  @JoinColumn({ name: 'productId' })
  product: Promise<Product>
}
