import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TypeUser } from './entity/type-user.entity'
import { TypeUserRepository } from './type-user.service'
import { TypeUserController } from './type-user.controller'

@Module({
  imports: [TypeOrmModule.forFeature([TypeUser])],
  controllers: [TypeUserController],
  providers: [TypeUserController, TypeUserRepository],
  exports: [TypeUserController, TypeUserRepository],
})
export class TypeUserModule { }
