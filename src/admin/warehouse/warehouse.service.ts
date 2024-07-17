import { DataSource, Repository } from 'typeorm'
import { Warehouse } from './entity/warehouse.entity'
import { GenericRepository } from 'src/libs/class/repository'
import { InjectRepository } from '@nestjs/typeorm'

export class WarehouseRepository extends GenericRepository<Warehouse> {
  constructor(
    @InjectRepository(Warehouse)
    private readonly engineRepository: Repository<Warehouse>,
    dataSource: DataSource,
  ) {
    super(engineRepository, dataSource)

    this.modelClass = Warehouse
  }
}
