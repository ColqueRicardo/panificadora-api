import { DataSource, Repository } from 'typeorm'
import { Product } from './entity/product.entity'
import { GenericRepository } from 'src/libs/class/repository'
import { InjectRepository } from '@nestjs/typeorm'

export class ProductRepository extends GenericRepository<Product> {
  constructor(
    @InjectRepository(Product)
    private readonly engineRepository: Repository<Product>,
    dataSource: DataSource,
  ) {
    super(engineRepository, dataSource)

    this.modelClass = Product
  }
}
