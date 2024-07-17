import { Product } from 'src/admin/product/entity/product.entity'
import { Sale } from 'src/admin/sale/entity/sale.entity'
import { WarehouseProduct } from 'src/admin/warehouse-product/entity/warehouse-product.entity'
import { GenericEntity } from 'src/libs/class/entity'
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'

@Entity({
  name: 'saleDetails',
})
export class SaleDetail extends GenericEntity {

  @Column()
  saleId: number

  @Column()
  warehouseProductId: number

  @Column()
  quantity: number

  @Column()
  price: number

  @ManyToOne(() => Sale, sale => sale.saleDetails)
  @JoinColumn({ name: 'saleId' })
  sale: Promise<Sale>

  @ManyToOne(() => WarehouseProduct, warehouseProduct => warehouseProduct.saleDetails)
  @JoinColumn({ name: 'warehouseProductId' })
  warehouseProduct: Promise<WarehouseProduct>
}
