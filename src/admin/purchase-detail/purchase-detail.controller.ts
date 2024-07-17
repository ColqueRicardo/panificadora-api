import { Body, Controller, Delete,Param, Get, Post, Put } from '@nestjs/common'
import { PurchaseDetailRepository } from './purchase-detail.service'
import { PurchaseDetail } from './entity/purchase-detail.entity'
import { GenericResult } from 'src/libs/interfaces/result'
import { PurchaseDetailDto } from './entity/purchase-detail.dto'
import { ListPageDto } from 'src/libs/class/generic.dto'

@Controller('purchaseDetail')
export class PurchaseDetailController {
  constructor(private readonly purchaseDetailRepository: PurchaseDetailRepository) { }

  @Get(':id')
  async get(@Param('id') id: number): Promise<PurchaseDetail> {
    return this.purchaseDetailRepository.get(id)
  }

  @Post('list-page')
  async listPage(@Body() listPageDto: ListPageDto) {
    return await this.purchaseDetailRepository.listPage(listPageDto);
  }

  @Post("create")
  async create(@Body('model') model: PurchaseDetailDto): Promise<GenericResult> {
    return this.purchaseDetailRepository.create(model)
  }

  @Put("update")
  async update(@Body('id') id: number, @Body('model') model: PurchaseDetailDto): Promise<GenericResult> {
    return this.purchaseDetailRepository.update(id, model)
  }

  @Delete("delete/:id")
  async delete(@Param('id') id: number): Promise<GenericResult> {
    return this.purchaseDetailRepository.delete(id)
  }
}
