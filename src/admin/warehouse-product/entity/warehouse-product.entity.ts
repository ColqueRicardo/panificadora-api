import { Product } from 'src/admin/product/entity/product.entity'
import { Warehouse } from 'src/admin/warehouse/entity/warehouse.entity'
import { GenericEntity } from 'src/libs/class/entity'
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm'

@Entity({
  name: 'WarehouseProducts',
})
export class WarehouseProduct extends GenericEntity {

  @Column()
  productId: number

  @Column()
  quantity: number

  @Column()
  warehouseId: number

  @ManyToOne(() => Product, product => product.stocks)
  @JoinColumn({ name: 'productId' })
  product: Promise<Product>

  @ManyToOne(() => Warehouse, warehouse => warehouse.stocks)
  @JoinColumn({ name: 'warehouseId' })
  warehouse: Promise<Warehouse>
}
