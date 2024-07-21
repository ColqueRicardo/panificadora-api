import { Body, Controller, Delete,Param, Get, Post, Put } from '@nestjs/common'
import { TypeUserRepository } from './type-user.service'
import { TypeUser } from './entity/type-user.entity'
import { GenericResult } from 'src/libs/interfaces/result'
import { TypeUserDto } from './entity/type-user.dto'
import { ListPageDto } from 'src/libs/class/generic.dto'

@Controller('typeUser')
export class TypeUserController {
  constructor(private readonly typeUserRepository: TypeUserRepository) { }

  @Get(':id')
  async get(@Param('id') id: number): Promise<TypeUser> {
    return this.typeUserRepository.get(id)
  }

  @Post('list-page')
  async listPage(@Body() listPageDto: ListPageDto) {
    return await this.typeUserRepository.listPage(listPageDto);
  }

  @Post("create")
  async create(@Body('model') model: TypeUserDto): Promise<GenericResult> {
    return this.typeUserRepository.create(model)
  }

  @Put("update")
  async update(@Body('id') id: number, @Body('model') model: TypeUserDto): Promise<GenericResult> {
    return this.typeUserRepository.update(id, model)
  }

  @Delete("delete/:id")
  async delete(@Param('id') id: number): Promise<GenericResult> {
    return this.typeUserRepository.delete(id)
  }
}
