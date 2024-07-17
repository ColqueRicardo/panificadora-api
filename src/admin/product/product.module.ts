import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Product } from './entity/product.entity'
import { ProductRepository } from './product.service'
import { ProductController } from './product.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductController, ProductRepository],
  exports: [ProductController, ProductRepository],
})
export class ProductModule { }
