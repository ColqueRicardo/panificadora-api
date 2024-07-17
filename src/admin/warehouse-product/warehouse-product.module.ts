import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { WarehouseProduct } from './entity/warehouse-product.entity'
import { WarehouseProductRepository } from './warehouse-product.service'
import { WarehouseProductController } from './warehouse-product.controller'

@Module({
  imports: [TypeOrmModule.forFeature([WarehouseProduct])],
  controllers: [WarehouseProductController],
  providers: [WarehouseProductController, WarehouseProductRepository],
  exports: [WarehouseProductController, WarehouseProductRepository],
})
export class WarehouseProductModule { }
