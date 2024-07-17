import { DataSource, Repository } from 'typeorm'
import { MovementType } from './entity/movement-type.entity'
import { GenericRepository } from 'src/libs/class/repository'
import { InjectRepository } from '@nestjs/typeorm'

export class MovementTypeRepository extends GenericRepository<MovementType> {
  constructor(
    @InjectRepository(MovementType)
    private readonly engineRepository: Repository<MovementType>,
    dataSource: DataSource,
  ) {
    super(engineRepository, dataSource)

    this.modelClass = MovementType
  }
}
