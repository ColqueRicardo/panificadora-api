/* eslint-disable @typescript-eslint/no-unused-vars */
import { DynamicModule } from '@nestjs/common'
import { ConnectionOptions, getMetadataArgsStorage } from 'typeorm'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigService } from '@nestjs/config'

export const DatabaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  async useFactory(config: ConfigService) {
    const dbConfig: ConnectionOptions = {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      synchronize: JSON.parse(`${process.env.DB_SYNCHRONIZE}`),
      logging: JSON.parse(`${process.env.DB_LOGGING}`),
      entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
    }
    return dbConfig
  },
})

