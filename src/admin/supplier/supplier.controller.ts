import { Body, Controller, Delete,Param, Get, Post, Put } from '@nestjs/common'
import { SupplierRepository } from './supplier.service'
import { Supplier } from './entity/supplier.entity'
import { GenericResult } from 'src/libs/interfaces/result'
import { SupplierDto } from './entity/supplier.dto'
import { ListPageDto } from 'src/libs/class/generic.dto'

@Controller('supplier')
export class SupplierController {
  constructor(private readonly supplierRepository: SupplierRepository) { }

  @Get(':id')
  async get(@Param('id') id: number): Promise<Supplier> {
    return this.supplierRepository.get(id)
  }

  @Post('list-page')
  async listPage(@Body() listPageDto: ListPageDto) {
    return await this.supplierRepository.listPage(listPageDto);
  }

  @Post("create")
  async create(@Body('model') model: SupplierDto): Promise<GenericResult> {
    return this.supplierRepository.create(model)
  }

  @Put("update")
  async update(@Body('id') id: number, @Body('model') model: SupplierDto): Promise<GenericResult> {
    return this.supplierRepository.update(id, model)
  }

  @Delete("delete/:id")
  async delete(@Param('id') id: number): Promise<GenericResult> {
    return this.supplierRepository.delete(id)
  }
}
