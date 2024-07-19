import { Body, Controller, Delete,Param, Get, Post, Put, Query } from '@nestjs/common'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { WarehouseProductRepository } from './warehouse-product.service'
import { WarehouseProduct } from './entity/warehouse-product.entity'
import { GenericResult } from 'src/libs/interfaces/result'
import { WarehouseProductDto } from './entity/warehouse-product.dto'
import { ListPageDto } from 'src/libs/class/generic.dto'

@Controller('WarehouseProduct')
export class WarehouseProductController {
  constructor(private readonly WarehouseProductRepository: WarehouseProductRepository) { }

  @Get(':id')
  async get(@Param('id') id: number): Promise<WarehouseProduct> {
    return this.WarehouseProductRepository.get(id)
  }

  @Post('list-page')
  async listPage(@Body() listPageDto: ListPageDto) {
    return await this.WarehouseProductRepository.listPage(listPageDto);
  }

  @Post("create")
  async create(@Body('model') model: WarehouseProductDto): Promise<GenericResult> {
    return this.WarehouseProductRepository.create(model)
  }

  @Put("update")
  async update(@Body('id') id: number, @Body('model') model: WarehouseProductDto): Promise<GenericResult> {
    return this.WarehouseProductRepository.update(id, model)
  }

  @Delete("delete/:id")
  async delete(@Param('id') id: number): Promise<GenericResult> {
    return this.WarehouseProductRepository.delete(id)
  }
}
