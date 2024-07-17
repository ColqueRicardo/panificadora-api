import { Body, Controller, Delete,Param, Get, Post, Put } from '@nestjs/common'
import { SaleDetailRepository } from './sale-detail.service'
import { SaleDetail } from './entity/sale-detail.entity'
import { GenericResult } from 'src/libs/interfaces/result'
import { SaleDetailDto } from './entity/sale-detail.dto'
import { ListPageDto } from 'src/libs/class/generic.dto'

@Controller('saleDetail')
export class SaleDetailController {
  constructor(private readonly saleDetailRepository: SaleDetailRepository) { }

  @Get(':id')
  async get(@Param('id') id: number): Promise<SaleDetail> {
    return this.saleDetailRepository.get(id)
  }

  @Post('list-page')
  async listPage(@Body() listPageDto: ListPageDto) {
    return await this.saleDetailRepository.listPage(listPageDto);
  }

  @Post("create")
  async create(@Body('model') model: SaleDetailDto): Promise<GenericResult> {
    return this.saleDetailRepository.create(model)
  }

  @Put("update")
  async update(@Body('id') id: number, @Body('model') model: SaleDetailDto): Promise<GenericResult> {
    return this.saleDetailRepository.update(id, model)
  }

  @Delete("delete/:id")
  async delete(@Param('id') id: number): Promise<GenericResult> {
    return this.saleDetailRepository.delete(id)
  }
}
