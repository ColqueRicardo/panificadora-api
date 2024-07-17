import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SupplierProduct } from './entity/supplier-product.entity'
import { SupplierProductRepository } from './supplier-product.service'
import { SupplierProductController } from './supplier-product.controller'

@Module({
  imports: [TypeOrmModule.forFeature([SupplierProduct])],
  controllers: [SupplierProductController],
  providers: [SupplierProductController, SupplierProductRepository],
  exports: [SupplierProductController, SupplierProductRepository],
})
export class SupplierProductModule { }
