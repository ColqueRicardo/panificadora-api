import { Body, Controller, Delete,Param, Get, Post, Put } from '@nestjs/common'
import { PurchaseRepository } from './purchase.service'
import { Purchase } from './entity/purchase.entity'
import { GenericResult } from 'src/libs/interfaces/result'
import { PurchaseDto } from './entity/purchase.dto'
import { ListPageDto } from 'src/libs/class/generic.dto'

@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseRepository: PurchaseRepository) { }

  @Get(':id')
  async get(@Param('id') id: number): Promise<Purchase> {
    return this.purchaseRepository.get(id)
  }

  @Post('list-page')
  async listPage(@Body() listPageDto: ListPageDto) {
    return await this.purchaseRepository.listPage(listPageDto);
  }

  @Post("create")
  async create(@Body('model') model: PurchaseDto): Promise<GenericResult> {
    return this.purchaseRepository.create(model)
  }

  @Put("update")
  async update(@Body('id') id: number, @Body('model') model: PurchaseDto): Promise<GenericResult> {
    return this.purchaseRepository.update(id, model)
  }

  @Delete("delete/:id")
  async delete(@Param('id') id: number): Promise<GenericResult> {
    return this.purchaseRepository.delete(id)
  }
}
