import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PurchaseDetail } from './entity/purchase-detail.entity'
import { PurchaseDetailRepository } from './purchase-detail.service'
import { PurchaseDetailController } from './purchase-detail.controller'

@Module({
  imports: [TypeOrmModule.forFeature([PurchaseDetail])],
  controllers: [PurchaseDetailController],
  providers: [PurchaseDetailController, PurchaseDetailRepository],
  exports: [PurchaseDetailController, PurchaseDetailRepository],
})
export class PurchaseDetailModule { }
