import { WarehouseProduct } from 'src/admin/warehouse-product/entity/warehouse-product.entity'
import { GenericEntity } from 'src/libs/class/entity'
import { Column, Entity, OneToMany } from 'typeorm'

@Entity({
  name: 'Warehouses',
})
export class Warehouse extends GenericEntity {

  @Column()
  name: string

  @Column()
  address: string

  @OneToMany(() => WarehouseProduct, warehouseProduct => warehouseProduct.warehouse)
  stocks: Promise<WarehouseProduct[]>
}
