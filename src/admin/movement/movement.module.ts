import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Movement } from './entity/movement.entity'
import { MovementRepository } from './movement.service'
import { MovementController } from './movement.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Movement])],
  controllers: [MovementController],
  providers: [MovementController, MovementRepository],
  exports: [MovementController, MovementRepository],
})
export class MovementModule { }
