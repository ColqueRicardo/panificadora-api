import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Store } from './entity/store.entity'
import { StoreRepository } from './store.service'
import { StoreController } from './store.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Store])],
  controllers: [StoreController],
  providers: [StoreController, StoreRepository],
  exports: [StoreController, StoreRepository],
})
export class StoreModule { }
