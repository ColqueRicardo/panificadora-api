import { Body, Controller, Delete, Param, Get, Post, Put } from '@nestjs/common'
import { SaleRepository } from './sale.service'
import { GenericResult } from 'src/libs/interfaces/result'
import { CustomSaleDto } from './entity/sale.dto'
import { ListPageDto } from 'src/libs/class/generic.dto'

@Controller('sale')
export class SaleController {
  constructor(private readonly saleRepository: SaleRepository) { }

  @Get(':id')
  async get(@Param('id') id: number): Promise<CustomSaleDto> {
    return this.saleRepository.customGetSale(id)
  }

  @Post('list-page')
  async listPage(@Body() listPageDto: ListPageDto) {
    return await this.saleRepository.listPage(listPageDto);
  }

  @Post('create')
  async create(@Body("model") createSaleDto: CustomSaleDto): Promise<GenericResult> {
    console.log("createSaleDto",createSaleDto)
    return this.saleRepository.customCreate(createSaleDto);
  }

  // @Put('update')
  // async update(@Body("model") updateSaleDto: CreateSaleDto, @Body('id') id: number): Promise<GenericResult> {
  //   return this.saleRepository.update(id, updateSaleDto);
  // }

  @Delete("delete/:id")
  async delete(@Param('id') id: number): Promise<GenericResult> {
    return this.saleRepository.delete(id)
  }
}
