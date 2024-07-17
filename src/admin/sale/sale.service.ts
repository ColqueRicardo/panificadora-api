import { DataSource, Repository } from 'typeorm'
import { Sale } from './entity/sale.entity'
import { GenericRepository } from 'src/libs/class/repository'
import { InjectRepository } from '@nestjs/typeorm'

export class SaleRepository extends GenericRepository<Sale> {
  constructor(
    @InjectRepository(Sale)
    private readonly engineRepository: Repository<Sale>,
    dataSource: DataSource,
  ) {
    super(engineRepository, dataSource)

    this.modelClass = Sale
  }
}
