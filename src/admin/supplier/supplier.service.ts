import { DataSource, Repository } from 'typeorm'
import { Supplier } from './entity/supplier.entity'
import { GenericRepository } from 'src/libs/class/repository'
import { InjectRepository } from '@nestjs/typeorm'

export class SupplierRepository extends GenericRepository<Supplier> {
  constructor(
    @InjectRepository(Supplier)
    private readonly engineRepository: Repository<Supplier>,
    dataSource: DataSource,
  ) {
    super(engineRepository, dataSource)

    this.modelClass = Supplier
  }
}
