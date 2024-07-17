import { Body, Controller, Delete,Param, Get, Post, Put } from '@nestjs/common'
import { WarehouseRepository } from './warehouse.service'
import { Warehouse } from './entity/warehouse.entity'
import { GenericResult } from 'src/libs/interfaces/result'
import { WarehouseDto } from './entity/warehouse.dto'
import { ListPageDto } from 'src/libs/class/generic.dto'

@Controller('Warehouse')
export class WarehouseController {
  constructor(private readonly WarehouseRepository: WarehouseRepository) { }

  @Get(':id')
  async get(@Param('id') id: number): Promise<Warehouse> {
    return this.WarehouseRepository.get(id)
  }

  @Post('list-page')
  async listPage(@Body() listPageDto: ListPageDto) {
    return await this.WarehouseRepository.listPage(listPageDto);
  }

  @Post("create")
  async create(@Body('model') model: WarehouseDto): Promise<GenericResult> {
    return this.WarehouseRepository.create(model)
  }

  @Put("update")
  async update(@Body('id') id: number, @Body('model') model: WarehouseDto): Promise<GenericResult> {
    return this.WarehouseRepository.update(id, model)
  }

  @Delete("delete/:id")
  async delete(@Param('id') id: number): Promise<GenericResult> {
    return this.WarehouseRepository.delete(id)
  }
}
