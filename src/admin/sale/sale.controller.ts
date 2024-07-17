import { Body, Controller, Delete,Param, Get, Post, Put } from '@nestjs/common'
import { SaleRepository } from './sale.service'
import { Sale } from './entity/sale.entity'
import { GenericResult } from 'src/libs/interfaces/result'
import { SaleDto } from './entity/sale.dto'
import { ListPageDto } from 'src/libs/class/generic.dto'

@Controller('sale')
export class SaleController {
  constructor(private readonly saleRepository: SaleRepository) { }

  @Get(':id')
  async get(@Param('id') id: number): Promise<Sale> {
    return this.saleRepository.get(id)
  }

  @Post('list-page')
  async listPage(@Body() listPageDto: ListPageDto) {
    return await this.saleRepository.listPage(listPageDto);
  }

  @Post("create")
  async create(@Body('model') model: SaleDto): Promise<GenericResult> {
    return this.saleRepository.create(model)
  }

  @Put("update")
  async update(@Body('id') id: number, @Body('model') model: SaleDto): Promise<GenericResult> {
    return this.saleRepository.update(id, model)
  }

  @Delete("delete/:id")
  async delete(@Param('id') id: number): Promise<GenericResult> {
    return this.saleRepository.delete(id)
  }
}
