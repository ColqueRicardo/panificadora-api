import { Body, Controller, Delete,Param, Get, Post, Put } from '@nestjs/common'
import { MovementTypeRepository } from './movement-type.service'
import { MovementType } from './entity/movement-type.entity'
import { GenericResult } from 'src/libs/interfaces/result'
import { MovementTypeDto } from './entity/movement-type.dto'
import { ListPageDto } from 'src/libs/class/generic.dto'

@Controller('movementType')
export class MovementTypeController {
  constructor(private readonly movementTypeRepository: MovementTypeRepository) { }

  @Get(':id')
  async get(@Param('id') id: number): Promise<MovementType> {
    return this.movementTypeRepository.get(id)
  }

  @Post('list-page')
  async listPage(@Body() listPageDto: ListPageDto) {
    return await this.movementTypeRepository.listPage(listPageDto);
  }

  @Post("create")
  async create(@Body('model') model: MovementTypeDto): Promise<GenericResult> {
    return this.movementTypeRepository.create(model)
  }

  @Put("update")
  async update(@Body('id') id: number, @Body('model') model: MovementTypeDto): Promise<GenericResult> {
    return this.movementTypeRepository.update(id, model)
  }

  @Delete("delete/:id")
  async delete(@Param('id') id: number): Promise<GenericResult> {
    return this.movementTypeRepository.delete(id)
  }
}
