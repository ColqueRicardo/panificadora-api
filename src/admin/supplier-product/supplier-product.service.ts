import { DataSource, Repository } from 'typeorm'
import { SupplierProduct } from './entity/supplier-product.entity'
import { GenericRepository } from 'src/libs/class/repository'
import { InjectRepository } from '@nestjs/typeorm'

export class SupplierProductRepository extends GenericRepository<SupplierProduct> {
  constructor(
    @InjectRepository(SupplierProduct)
    private readonly engineRepository: Repository<SupplierProduct>,
    dataSource: DataSource,
  ) {
    super(engineRepository, dataSource)

    this.modelClass = SupplierProduct
  }
}
