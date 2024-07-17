import { Sale } from 'src/admin/sale/entity/sale.entity'
import { GenericEntity } from 'src/libs/class/entity'
import { Column, Entity, OneToMany } from 'typeorm'

@Entity({
  name: 'customers',
})
export class Customer extends GenericEntity {

  @Column()
  name: string

  @Column()
  phone: string

  @Column()
  email: string

  @Column()
  address: string

  @OneToMany(() => Sale, sale => sale.customer)
  sales: Promise<Sale[]>

}
