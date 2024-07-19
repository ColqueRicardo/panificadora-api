import { DataSource, Repository } from 'typeorm'
import { Product } from './entity/product.entity'
import { GenericRepository } from 'src/libs/class/repository'
import { InjectRepository } from '@nestjs/typeorm'

export class ProductRepository extends GenericRepository<Product> {
  constructor(
    @InjectRepository(Product)
    private readonly engineRepository: Repository<Product>,
    dataSource: DataSource,
  ) {
    super(engineRepository, dataSource)

    this.modelClass = Product
  }

  async search(query?: string): Promise<Product[]> {
    const queryRunner = this.dataSource.createQueryRunner()
    try {
      await queryRunner.connect()
      await queryRunner.startTransaction()
      const queryBuilder = queryRunner.manager.createQueryBuilder(Product, "p")
        // .where("p.isFinalProduct = True")
        .limit(30)
      if (query) {
        queryBuilder.andWhere("p.name like :query", { query: `%${query}%` })
      }
      await queryRunner.commitTransaction()
      return await queryBuilder.getMany()
    } catch (error) {
      await queryRunner.rollbackTransaction()
    } finally {
      await queryRunner.release()
    }
  }

}
