import { DataSource, Repository } from 'typeorm'
import { Purchase } from './entity/purchase.entity'
import { GenericRepository } from 'src/libs/class/repository'
import { InjectRepository } from '@nestjs/typeorm'

export class PurchaseRepository extends GenericRepository<Purchase> {
  constructor(
    @InjectRepository(Purchase)
    private readonly engineRepository: Repository<Purchase>,
    dataSource: DataSource,
  ) {
    super(engineRepository, dataSource)

    this.modelClass = Purchase
  }
}
