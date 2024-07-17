import { Body, Controller, Delete,Param, Get, Post, Put } from '@nestjs/common'
import { CustomerRepository } from './customer.service'
import { Customer } from './entity/customer.entity'
import { GenericResult } from 'src/libs/interfaces/result'
import { CustomerDto } from './entity/customer.dto'
import { ListPageDto } from 'src/libs/class/generic.dto'

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerRepository: CustomerRepository) { }

  @Get(':id')
  async get(@Param('id') id: number): Promise<Customer> {
    return this.customerRepository.get(id)
  }

  @Post('list-page')
  async listPage(@Body() listPageDto: ListPageDto) {
    return await this.customerRepository.listPage(listPageDto);
  }

  @Post("create")
  async create(@Body('model') model: CustomerDto): Promise<GenericResult> {
    return this.customerRepository.create(model)
  }

  @Put("update")
  async update(@Body('id') id: number, @Body('model') model: CustomerDto): Promise<GenericResult> {
    return this.customerRepository.update(id, model)
  }

  @Delete("delete/:id")
  async delete(@Param('id') id: number): Promise<GenericResult> {
    return this.customerRepository.delete(id)
  }
}
