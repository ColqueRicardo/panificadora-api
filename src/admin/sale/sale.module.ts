import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Sale } from './entity/sale.entity'
import { SaleRepository } from './sale.service'
import { SaleController } from './sale.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Sale])],
  controllers: [SaleController],
  providers: [SaleController, SaleRepository],
  exports: [SaleController, SaleRepository],
})
export class SaleModule { }
