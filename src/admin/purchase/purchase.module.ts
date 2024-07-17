import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Purchase } from './entity/purchase.entity'
import { PurchaseRepository } from './purchase.service'
import { PurchaseController } from './purchase.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Purchase])],
  controllers: [PurchaseController],
  providers: [PurchaseController, PurchaseRepository],
  exports: [PurchaseController, PurchaseRepository],
})
export class PurchaseModule { }
