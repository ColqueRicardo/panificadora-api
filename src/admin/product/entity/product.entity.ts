import { PurchaseDetail } from 'src/admin/purchase-detail/entity/purchase-detail.entity'
import { SaleDetail } from 'src/admin/sale-detail/entity/sale-detail.entity'
import { Supplier } from 'src/admin/supplier/entity/supplier.entity'
import { WarehouseProduct } from 'src/admin/warehouse-product/entity/warehouse-product.entity'
import { GenericEntity } from 'src/libs/class/entity'
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm'

@Entity({
  name: 'products',
})
export class Product extends GenericEntity {

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  price: number

  @Column()
  supplierId: number

  @ManyToOne(() => Supplier, supplier => supplier.products)
  @JoinColumn({ name: 'supplierId' })
  supplier: Promise<Supplier>

  @OneToMany(() => PurchaseDetail, purchaseDetail => purchaseDetail.product)
  purchaseDetails: Promise<PurchaseDetail[]>

  @OneToMany(() => SaleDetail, saleDetail => saleDetail.product)
  saleDetails: Promise<SaleDetail[]>

  @OneToMany(() => WarehouseProduct, warehouseProduct => warehouseProduct.product)
  stocks: Promise<WarehouseProduct[]>
}
