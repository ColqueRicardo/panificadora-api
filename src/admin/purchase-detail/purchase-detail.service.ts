import { DataSource, Repository } from 'typeorm'
import { PurchaseDetail } from './entity/purchase-detail.entity'
import { GenericRepository } from 'src/libs/class/repository'
import { InjectRepository } from '@nestjs/typeorm'

export class PurchaseDetailRepository extends GenericRepository<PurchaseDetail> {
  constructor(
    @InjectRepository(PurchaseDetail)
    private readonly engineRepository: Repository<PurchaseDetail>,
    dataSource: DataSource,
  ) {
    super(engineRepository, dataSource)

    this.modelClass = PurchaseDetail
  }
}
