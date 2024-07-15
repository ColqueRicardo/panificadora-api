import { Injectable } from '@nestjs/common'
import { GenericEntity } from './entity'
import { DataSource, QueryRunner, Repository } from 'typeorm'
import { GenericResult } from '../interfaces/result'
import { FiltersDto, ListPage, ListPageDto } from './generic.dto';
import { DEFAULT_PAGE } from '../const/list-page-const';

export interface Constructor<T> {
  new(...args: any[]): T;
}

@Injectable()
export class GenericRepository<T extends GenericEntity> {
  _modelClass: typeof GenericEntity

  get modelClass() {
    return this._modelClass
  }

  set modelClass(model) {
    this._modelClass = model
  }

  constructor(private readonly engineRepo: Repository<T>,
    protected dataSource: DataSource
  ) {
  }

  async get(id: number): Promise<T> {
    try {
      if (!id) throw new Error("not submit id");
      const find = await this.engineRepo.createQueryBuilder().where('id= :id', { id: id }).getOne()
      if (!find) {
        throw new Error("this entity not exist");
      }
      return find
    } catch (error) {
      return null
    } finally {
    }
  }

  async create(model: GenericEntity, transaction?: QueryRunner): Promise<GenericResult> {
    const queryRunner = transaction ? transaction : this.dataSource.createQueryRunner()
    const result: GenericResult = { result: true, message: null }
    try {
      if (!transaction) {
        await queryRunner.connect()
        await queryRunner.startTransaction()
      }
      await queryRunner.manager.save(this._modelClass, model)
      if (!transaction) {
        await queryRunner.commitTransaction()
      }
      return result
    } catch (error) {
      result.result = false
      result.message = error.message
      await queryRunner.rollbackTransaction()
      return result
    }
    finally {
      if (!transaction)
        await queryRunner.release()
    }
  }

  async update(id: number, model: GenericEntity, transaction?: QueryRunner): Promise<GenericResult> {
    const queryRunner = transaction ? transaction : this.dataSource.createQueryRunner()
    const result: GenericResult = { result: true, message: null }
    try {
      if (!transaction) {
        await queryRunner.connect()
        await queryRunner.startTransaction()
      }
      await queryRunner.manager.update(this.modelClass, id, model)
      if (!transaction) await queryRunner.commitTransaction()
      return result
    } catch (error) {
      result.result = false
      result.message = error.message
      await queryRunner.rollbackTransaction()
      return result
    }
    finally {
      if (!transaction)
        await queryRunner.release()
    }
  }

  async delete(id: number, transaction?: QueryRunner): Promise<GenericResult> {
    const queryRunner = transaction ? transaction : this.dataSource.createQueryRunner()
    const result: GenericResult = { result: true, message: null }
    try {
      if (!transaction) {
        await queryRunner.connect()
        await queryRunner.startTransaction()
      }

      await queryRunner.manager.softDelete(this._modelClass, id)
      if (!transaction) await queryRunner.commitTransaction()
      return result
    } catch (error) {
      result.result = false
      result.message = error.message
      await queryRunner.rollbackTransaction()
      return result
    }
    finally {
      if (!transaction)
        await queryRunner.release()
    }
  }

  async listPage(listPageDto: ListPageDto): Promise<ListPage> {
    let { page } = listPageDto;
    const { limit, order, filters } = listPageDto;
    if (page < DEFAULT_PAGE) {
      page = DEFAULT_PAGE
    }
    const alias = "alias"
    const query = this.engineRepo.createQueryBuilder(alias)
      .orderBy(`${order.key}`, order.order)
    filters.forEach((filter: FiltersDto) => {
      query.andWhere(` ${alias}.${filter.key}= :${filter.key}`).setParameter(`${filter.key}`, filter.value)
    })
    const totalRecords: number = await query.getCount()
    const result = await query.offset(((page - 1) * limit))
      .limit(limit)
      .getMany()
    const response: ListPage = {
      count: totalRecords,
      limit: listPageDto.limit,
      page: listPageDto.page,
      records: result,
      totalPage: (~~(totalRecords / limit)) + 1
    }
    return response
  }

  async getAll(filters?: FiltersDto[]): Promise<T[]> {
    const alias = "alias"
    const query = this.engineRepo.createQueryBuilder(alias)
    if (filters)
      filters.forEach((filter: FiltersDto) => {
        query.andWhere(` ${alias}.${filter.key}= :${filter.key}`).setParameter(`${filter.key}`, filter.value)
      })
    const result = await query.getMany()
    return result
  }
}
