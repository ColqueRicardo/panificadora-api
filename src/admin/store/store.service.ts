import { DataSource, Repository } from 'typeorm'
import { Store } from './entity/store.entity'
import { GenericRepository } from 'src/libs/class/repository'
import { InjectRepository } from '@nestjs/typeorm'

export class StoreRepository extends GenericRepository<Store> {
  constructor(
    @InjectRepository(Store)
    private readonly engineRepository: Repository<Store>,
    dataSource: DataSource,
  ) {
    super(engineRepository, dataSource)

    this.modelClass = Store
  }
}
