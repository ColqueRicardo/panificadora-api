import { DataSource, Repository } from 'typeorm'
import { Customer } from './entity/customer.entity'
import { GenericRepository } from 'src/libs/class/repository'
import { InjectRepository } from '@nestjs/typeorm'

export class CustomerRepository extends GenericRepository<Customer> {
  constructor(
    @InjectRepository(Customer)
    private readonly engineRepository: Repository<Customer>,
    dataSource: DataSource,
  ) {
    super(engineRepository, dataSource)

    this.modelClass = Customer
  }
}
