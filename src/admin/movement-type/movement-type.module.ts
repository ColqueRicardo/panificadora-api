import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MovementType } from './entity/movement-type.entity'
import { MovementTypeRepository } from './movement-type.service'
import { MovementTypeController } from './movement-type.controller'

@Module({
  imports: [TypeOrmModule.forFeature([MovementType])],
  controllers: [MovementTypeController],
  providers: [MovementTypeController, MovementTypeRepository],
  exports: [MovementTypeController, MovementTypeRepository],
})
export class MovementTypeModule { }
