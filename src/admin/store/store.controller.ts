import { Body, Controller, Delete,Param, Get, Post, Put } from '@nestjs/common'
import { StoreRepository } from './store.service'
import { Store } from './entity/store.entity'
import { GenericResult } from 'src/libs/interfaces/result'
import { StoreDto } from './entity/store.dto'
import { ListPageDto } from 'src/libs/class/generic.dto'

@Controller('store')
export class StoreController {
  constructor(private readonly storeRepository: StoreRepository) { }

  @Get(':id')
  async get(@Param('id') id: number): Promise<Store> {
    return this.storeRepository.get(id)
  }

  @Post('list-page')
  async listPage(@Body() listPageDto: ListPageDto) {
    return await this.storeRepository.listPage(listPageDto);
  }

  @Post("create")
  async create(@Body('model') model: StoreDto): Promise<GenericResult> {
    return this.storeRepository.create(model)
  }

  @Put("update")
  async update(@Body('id') id: number, @Body('model') model: StoreDto): Promise<GenericResult> {
    return this.storeRepository.update(id, model)
  }

  @Delete("delete/:id")
  async delete(@Param('id') id: number): Promise<GenericResult> {
    return this.storeRepository.delete(id)
  }
}
