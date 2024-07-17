import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SaleDetail } from './entity/sale-detail.entity'
import { SaleDetailRepository } from './sale-detail.service'
import { SaleDetailController } from './sale-detail.controller'

@Module({
  imports: [TypeOrmModule.forFeature([SaleDetail])],
  controllers: [SaleDetailController],
  providers: [SaleDetailController, SaleDetailRepository],
  exports: [SaleDetailController, SaleDetailRepository],
})
export class SaleDetailModule { }
