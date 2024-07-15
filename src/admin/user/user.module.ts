import { Module } from '@nestjs/common'
import { User } from './entity/user.entity'
import { UserRepository } from './user.service'
import { UserController } from './user.controller'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserController, UserRepository],
  exports: [UserController, UserRepository],
})
export class UserModule { }
