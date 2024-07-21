import { DataSource, Repository } from 'typeorm'
import { TypeUser } from './entity/type-user.entity'
import { GenericRepository } from 'src/libs/class/repository'
import { InjectRepository } from '@nestjs/typeorm'

export class TypeUserRepository extends GenericRepository<TypeUser> {
  constructor(
    @InjectRepository(TypeUser)
    private readonly engineRepository: Repository<TypeUser>,
    dataSource: DataSource,
  ) {
    super(engineRepository, dataSource)

    this.modelClass = TypeUser
  }
}
