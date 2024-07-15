import {  DataSource, Repository } from 'typeorm'
import { User } from './entity/user.entity'
import { GenericRepository } from 'src/libs/class/repository'
import { InjectRepository } from '@nestjs/typeorm'

export class UserRepository extends GenericRepository<User> {
  constructor(
    @InjectRepository(User)
    private readonly engineRepository: Repository<User>,
    protected dataSource: DataSource,
  ) {
    super(engineRepository, dataSource)

    this.modelClass = User
  }
}
