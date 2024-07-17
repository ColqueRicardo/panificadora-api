import { Body, Controller, Delete,Param, Get, Post, Put } from '@nestjs/common'
import { MovementRepository } from './movement.service'
import { Movement } from './entity/movement.entity'
import { GenericResult } from 'src/libs/interfaces/result'
import { MovementDto } from './entity/movement.dto'
import { ListPageDto } from 'src/libs/class/generic.dto'

@Controller('movement')
export class MovementController {
  constructor(private readonly movementRepository: MovementRepository) { }

  @Get(':id')
  async get(@Param('id') id: number): Promise<Movement> {
    return this.movementRepository.get(id)
  }

  @Post('list-page')
  async listPage(@Body() listPageDto: ListPageDto) {
    return await this.movementRepository.listPage(listPageDto);
  }

  @Post("create")
  async create(@Body('model') model: MovementDto): Promise<GenericResult> {
    return this.movementRepository.create(model)
  }

  @Put("update")
  async update(@Body('id') id: number, @Body('model') model: MovementDto): Promise<GenericResult> {
    return this.movementRepository.update(id, model)
  }

  @Delete("delete/:id")
  async delete(@Param('id') id: number): Promise<GenericResult> {
    return this.movementRepository.delete(id)
  }
}
