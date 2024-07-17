import { Body, Controller, Delete,Param, Get, Post, Put } from '@nestjs/common'
import { SupplierProductRepository } from './supplier-product.service'
import { SupplierProduct } from './entity/supplier-product.entity'
import { GenericResult } from 'src/libs/interfaces/result'
import { SupplierProductDto } from './entity/supplier-product.dto'
import { ListPageDto } from 'src/libs/class/generic.dto'

@Controller('supplierProduct')
export class SupplierProductController {
  constructor(private readonly supplierProductRepository: SupplierProductRepository) { }

  @Get(':id')
  async get(@Param('id') id: number): Promise<SupplierProduct> {
    return this.supplierProductRepository.get(id)
  }

  @Post('list-page')
  async listPage(@Body() listPageDto: ListPageDto) {
    return await this.supplierProductRepository.listPage(listPageDto);
  }

  @Post("create")
  async create(@Body('model') model: SupplierProductDto): Promise<GenericResult> {
    return this.supplierProductRepository.create(model)
  }

  @Put("update")
  async update(@Body('id') id: number, @Body('model') model: SupplierProductDto): Promise<GenericResult> {
    return this.supplierProductRepository.update(id, model)
  }

  @Delete("delete/:id")
  async delete(@Param('id') id: number): Promise<GenericResult> {
    return this.supplierProductRepository.delete(id)
  }
}
