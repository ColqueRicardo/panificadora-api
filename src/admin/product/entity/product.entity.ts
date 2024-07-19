import { PurchaseDetail } from 'src/admin/purchase-detail/entity/purchase-detail.entity'
import { SaleDetail } from 'src/admin/sale-detail/entity/sale-detail.entity'
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

  @Column({ nullable: false, type: "float", default: 0.0 })
  price: number

  @Column({ default: false })
  isFinalProduct: boolean

  @OneToMany(() => PurchaseDetail, purchaseDetail => purchaseDetail.product)
  purchaseDetails: Promise<PurchaseDetail[]>

  @OneToMany(() => WarehouseProduct, warehouseProduct => warehouseProduct.product)
  stocks: Promise<WarehouseProduct[]>

  @OneToMany(() => SupplierProduct, supplierProduct => supplierProduct.product)
  supplierProduct: Promise<SupplierProduct[]>

  @OneToMany(() => SaleDetail, saleDetail => saleDetail.product)
  saleDetails: Promise<SaleDetail[]>
}
