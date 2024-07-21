import { DataSource, Repository } from 'typeorm'
import { User } from './entity/user.entity'
import { GenericRepository } from 'src/libs/class/repository'
import { InjectRepository } from '@nestjs/typeorm'
import { EncryptionService } from 'src/libs/class/encrypt-class'
import { GenericResult } from 'src/libs/interfaces/result'

export class UserRepository extends GenericRepository<User> {
  constructor(
    @InjectRepository(User)
    private readonly engineRepository: Repository<User>,
    protected dataSource: DataSource,
  ) {
    super(engineRepository, dataSource)

    this.modelClass = User
  }

  async internalLogIn(encryptData: string): Promise<User> {
    const key = process.env.keyCrypt;
    const iv = process.env.ivCrypt;
    const serviceEncrypt: EncryptionService = new EncryptionService(key, iv);
    const data: { email: string, password: string } = JSON.parse(await serviceEncrypt.decrypt(encryptData))
    const user = await this.engineRepository.createQueryBuilder("u").where("u.email= :email", { email: data.email }).getOne()
    if (user && await serviceEncrypt.decrypt(user.password) === data.password) {
      return user;
    }
    return null;
  }

  async validateUser(id: number): Promise<User> {
    try {
      return await this.get(id)
    } catch (error) {
      return null
    }
  }

  async generatePassword(email: string, encryptData: string): Promise<User> {
    const queryRunner = this.dataSource.createQueryRunner()
    try {
      await queryRunner.connect()
      await queryRunner.startTransaction()

      const key = process.env.keyCrypt;
      const iv = process.env.ivCrypt;
      const serviceEncrypt: EncryptionService = new EncryptionService(key, iv);
      const password = await serviceEncrypt.decrypt(encryptData)
      const user = await queryRunner.manager.createQueryBuilder(User, "u")
        .where("u.email= :email", { email: email })
        .andWhere("u.code is not null")
        .getOne()
      if (user) {
        user.password = await serviceEncrypt.encrypt(password)
        user.code = null
        await queryRunner.manager.save(user)
      }
      await queryRunner.commitTransaction()
      return user
    } catch (error) {

      await queryRunner.rollbackTransaction()

    } finally {
      await queryRunner.release()
    }
  }

  async verifyCode(email: string, code: string): Promise<User> {
    return await this.dataSource.createQueryBuilder(User, "s")
      .where("s.code=:code", { code })
      .andWhere("s.email =:email", { email })
      .getOne()
  }

  async generateCode(email: string): Promise<GenericResult> {
    const queryRunner = this.dataSource.createQueryRunner()
    try {
      await queryRunner.connect()
      await queryRunner.startTransaction()
      const user = await queryRunner.manager.createQueryBuilder(User, "s")
        .where("s.email =:email", { email })
        .getOne()

      if (!user) {
        return { result: false, message: "email: no registrado" }
      }

      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let code = '';
      for (let i = 0; i < 6; i++) {
        const char = Math.floor(Math.random() * characters.length);
        code += characters[char];
      }
      user.code = code
      await queryRunner.manager.save(user)

      await queryRunner.commitTransaction()
      return { result: true, message: code }
    } catch (error) {
      await queryRunner.rollbackTransaction()
    }
    finally {
      await queryRunner.release()
    }
  }
}
