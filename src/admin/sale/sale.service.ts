import { DataSource, QueryRunner, Repository } from 'typeorm'
import { Sale } from './entity/sale.entity'
import { GenericRepository } from 'src/libs/class/repository'
import { InjectRepository } from '@nestjs/typeorm'
import { CustomSaleDto } from './entity/sale.dto'
import { GenericResult } from 'src/libs/interfaces/result'
import { SaleDetail } from '../sale-detail/entity/sale-detail.entity'
import { Store } from '../store/entity/store.entity'
import { Customer } from '../customer/entity/customer.entity'
import { Product } from '../product/entity/product.entity'

export class SaleRepository extends GenericRepository<Sale> {
  constructor(
    @InjectRepository(Sale)
    private readonly engineRepository: Repository<Sale>,
    dataSource: DataSource,
  ) {
    super(engineRepository, dataSource)

    this.modelClass = Sale
  }

  async customCreate(model: CustomSaleDto, transaction?: QueryRunner): Promise<GenericResult> {
    const queryRunner = transaction ? transaction : this.dataSource.createQueryRunner()
    const result: GenericResult = { result: true, message: null }
    try {
      if (!transaction) {
        await queryRunner.connect()
        await queryRunner.startTransaction()
      }
      const { customerId, products, date, discount, storeId } = model
      let { total } = model
      if (!total) {
        total = (products.reduce((tt, product) => tt + (product.quantity * product.price), 0)) * (1 - ((discount ?? 0) / 100))
      }
      const payload = Object.assign(new Sale(), {
        customerId, date, discount, storeId, total: total
      })
      const sale = await queryRunner.manager.save(payload)

      const detailSale = products.map((product) => {
        return Object.assign(new SaleDetail(), {
          saleId: sale.id,
          quantity: product.quantity,
          productId: product.id,
          price: product.price
        })
      })
      await queryRunner.manager.save(detailSale)

      if (!transaction) {
        await queryRunner.commitTransaction()
      }
      return result
    } catch (error) {
      result.result = false
      result.message = error.message
      await queryRunner.rollbackTransaction()
      console.log(error)
      return result
    }
    finally {
      if (!transaction)
        await queryRunner.release()
    }
  }

  // async customUpdate(id: number, model: GenericEntity, transaction?: QueryRunner): Promise<GenericResult> {
  //   const queryRunner = transaction ? transaction : this.dataSource.createQueryRunner()
  //   const result: GenericResult = { result: true, message: null }
  //   try {
  //     if (!transaction) {
  //       await queryRunner.connect()
  //       await queryRunner.startTransaction()
  //     }
  //     await queryRunner.manager.update(this.modelClass, id, model)
  //     if (!transaction) await queryRunner.commitTransaction()
  //     return result
  //   } catch (error) {
  //     result.result = false
  //     result.message = error.message
  //     await queryRunner.rollbackTransaction()
  //     return result
  //   }
  //   finally {
  //     if (!transaction)
  //       await queryRunner.release()
  //   }
  // }

  async customGetSale(id: number): Promise<CustomSaleDto> {
    const query = await this.engineRepository.createQueryBuilder("s")
      .select([
        `s.id AS id`,
        `s.customerId AS customerId`,
        `s.date AS date`,
        `s.total AS total`,
        `s.discount AS discount`,
        `s.storeId AS "storeId"`,
        `c.name as "customerName"`,
        'st.name as "storeName"',
        `json_agg(
          json_build_object(
            'id', sd."productId",
            'quantity', sd."quantity",
            'price', sd."price",
            'name', p.name
          )
        ) AS products`
      ])
      .innerJoin(SaleDetail, "sd", "sd.saleId=s.id")
      .innerJoin(Product, "p", "p.id=sd.productId")
      .innerJoin(Store, "st", "st.id=s.storeId")
      .innerJoin(Customer, "c", "c.id=s.customerId")
      .where("s.id= :id", { id })
      .groupBy("s.id, s.customerId, s.date, s.total, s.discount, s.storeId, c.name,st.name")
      .getRawOne()
    console.log(query)
    return query
  }
}
