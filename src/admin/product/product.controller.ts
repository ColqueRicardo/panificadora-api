import { Body, Controller, Delete, Param, Get, Post, Put } from '@nestjs/common'
import { ProductRepository } from './product.service'
import { Product } from './entity/product.entity'
import { GenericResult } from 'src/libs/interfaces/result'
import { ProductDto } from './entity/product.dto'
import { ListPageDto } from 'src/libs/class/generic.dto'

@Controller('product')
export class ProductController {
  constructor(private readonly productRepository: ProductRepository) { }

  @Get(':id')
  async get(@Param('id') id: number): Promise<Product> {
    return this.productRepository.get(id)
  }

  @Post('list-page')
  async listPage(@Body() listPageDto: ListPageDto) {
    return await this.productRepository.listPage(listPageDto);
  }

  @Post("create")
  async create(@Body('model') model: ProductDto): Promise<GenericResult> {
    return this.productRepository.create(model)
  }

  @Put("update")
  async update(@Body('id') id: number, @Body('model') model: ProductDto): Promise<GenericResult> {
    return this.productRepository.update(id, model)
  }

  @Delete("delete/:id")
  async delete(@Param('id') id: number): Promise<GenericResult> {
    return this.productRepository.delete(id)
  }
}
