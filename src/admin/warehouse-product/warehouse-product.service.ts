import { DataSource, Repository } from 'typeorm'
import { WarehouseProduct } from './entity/warehouse-product.entity'
import { GenericRepository } from 'src/libs/class/repository'
import { InjectRepository } from '@nestjs/typeorm'

export class WarehouseProductRepository extends GenericRepository<WarehouseProduct> {
  constructor(
    @InjectRepository(WarehouseProduct)
    private readonly engineRepository: Repository<WarehouseProduct>,
    dataSource: DataSource,
  ) {
    super(engineRepository, dataSource)

    this.modelClass = WarehouseProduct
  }
}
