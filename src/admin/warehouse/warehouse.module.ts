import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Warehouse } from './entity/warehouse.entity'
import { WarehouseRepository } from './warehouse.service'
import { WarehouseController } from './warehouse.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Warehouse])],
  controllers: [WarehouseController],
  providers: [WarehouseController, WarehouseRepository],
  exports: [WarehouseController, WarehouseRepository],
})
export class WarehouseModule { }
