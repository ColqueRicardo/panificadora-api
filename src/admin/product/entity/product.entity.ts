import { PurchaseDetail } from 'src/admin/purchase-detail/entity/purchase-detail.entity'
import { SupplierProduct } from 'src/admin/supplier-product/entity/supplier-product.entity'
import { WarehouseProduct } from 'src/admin/warehouse-product/entity/warehouse-product.entity'
import { GenericEntity } from 'src/libs/class/entity'
import { Column, Entity, OneToMany } from 'typeorm'

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
  isFinalProduct: number

  @OneToMany(() => PurchaseDetail, purchaseDetail => purchaseDetail.product)
  purchaseDetails: Promise<PurchaseDetail[]>

  @OneToMany(() => WarehouseProduct, warehouseProduct => warehouseProduct.product)
  stocks: Promise<WarehouseProduct[]>

  @OneToMany(() => SupplierProduct, supplierProduct => supplierProduct.product)
  supplierProduct: Promise<SupplierProduct[]>
}
