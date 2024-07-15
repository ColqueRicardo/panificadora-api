import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common'
import { UserRepository } from './user.service'
import { User } from './entity/user.entity'
import { GenericResult } from 'src/libs/interfaces/result'
import { UserDto } from './entity/user.dto'

@Controller('user')
export class UserController {
  constructor(private readonly userRepository: UserRepository) { }

  @Get()
  async get(@Body('id') id: number): Promise<User> {
    return this.userRepository.get(id)
  }

  @Post()
  async create(@Body('model') model: UserDto): Promise<GenericResult> {
    return this.userRepository.create(model)
  }

  @Put()
  async update(@Body('id') id: number, @Body('model') model: UserDto): Promise<GenericResult> {
    return this.userRepository.update(id, model)
  }

  @Delete()
  async delete(@Body('id') id: number): Promise<GenericResult> {
    return this.userRepository.delete(id)
  }
}
