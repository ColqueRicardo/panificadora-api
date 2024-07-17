import { Sale } from 'src/admin/sale/entity/sale.entity'
import { GenericEntity } from 'src/libs/class/entity'
import { Column, Entity, OneToMany } from 'typeorm'

@Entity({
  name: 'stores',
})
export class Store extends GenericEntity {

  @Column()
  name: string

  @Column()
  address: string

  @OneToMany(() => Sale, sale => sale.store)
  sales: Promise<Sale[]>
}
