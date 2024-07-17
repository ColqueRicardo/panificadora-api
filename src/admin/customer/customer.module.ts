import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Customer } from './entity/customer.entity'
import { CustomerRepository } from './customer.service'
import { CustomerController } from './customer.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [CustomerController],
  providers: [CustomerController, CustomerRepository],
  exports: [CustomerController, CustomerRepository],
})
export class CustomerModule { }
