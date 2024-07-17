import { DataSource, Repository } from 'typeorm'
import { Movement } from './entity/movement.entity'
import { GenericRepository } from 'src/libs/class/repository'
import { InjectRepository } from '@nestjs/typeorm'

export class MovementRepository extends GenericRepository<Movement> {
  constructor(
    @InjectRepository(Movement)
    private readonly engineRepository: Repository<Movement>,
    dataSource: DataSource,
  ) {
    super(engineRepository, dataSource)

    this.modelClass = Movement
  }
}
