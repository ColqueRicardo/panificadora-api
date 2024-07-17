import { DataSource, Repository } from 'typeorm'
import { SaleDetail } from './entity/sale-detail.entity'
import { GenericRepository } from 'src/libs/class/repository'
import { InjectRepository } from '@nestjs/typeorm'

export class SaleDetailRepository extends GenericRepository<SaleDetail> {
  constructor(
    @InjectRepository(SaleDetail)
    private readonly engineRepository: Repository<SaleDetail>,
    dataSource: DataSource,
  ) {
    super(engineRepository, dataSource)

    this.modelClass = SaleDetail
  }
}
