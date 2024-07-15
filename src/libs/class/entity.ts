import { BaseEntity, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

export abstract class GenericEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn({ type: "datetime" })
  createdAt?: Date

  @UpdateDateColumn({ type: "datetime", default: null })
  updatedAt?: Date

  @DeleteDateColumn({ type: "datetime", default: null })
  deletedAt?: Date

}
