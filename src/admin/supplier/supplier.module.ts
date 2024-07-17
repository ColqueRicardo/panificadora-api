import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Supplier } from './entity/supplier.entity'
import { SupplierRepository } from './supplier.service'
import { SupplierController } from './supplier.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Supplier])],
  controllers: [SupplierController],
  providers: [SupplierController, SupplierRepository],
  exports: [SupplierController, SupplierRepository],
})
export class SupplierModule { }
