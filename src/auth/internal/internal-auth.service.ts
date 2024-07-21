import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IJwtAuth } from '../auth.interface';
import { GenericResult } from 'src/libs/interfaces/result';
import { UserRepository } from 'src/admin/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) { }

  async signIn(encryptData: string): Promise<{ token: string, user: IJwtAuth } | GenericResult> {
    try {
      const user = await this.userRepository.internalLogIn(encryptData)
      if (!user) {
        throw new Error("credenciales invalidas")
      }
      const payload: IJwtAuth = { id: user.id, name: user.name, email: user.email, typeUserId: user.typeUserId }
      const result = await this.jwtService.signAsync(payload)
      return { token: result, user: payload }
    } catch (error) {
      console.log(error)
      return { result: false, message: error.message }
    }
  }

  async generate(email: string, password: string): Promise<GenericResult> {
    try {
      const user = await this.userRepository.generatePassword(email, password)
      if (!user) {
        return { result: false, message: "por favor verifique si a pedido un cambio de contraseña" }
      }
      return { result: true }
    } catch (error) {
      return { result: false, message: error.message }
    }
  }

  async verifyCode(email: string, code: string): Promise<GenericResult> {
    try {
      const user = await this.userRepository.verifyCode(email, code)
      if (!user) {
        return { result: false, message: "por favor verifique si a pedido un cambio de contraseña" }
      }
      return { result: true }
    } catch (error) {
      return { result: false, message: error.message }
    }
  }

  async generateCode(email: string): Promise<GenericResult> {
    try {
      const adminUser = await this.userRepository.generateCode(email)
      return adminUser
    } catch (error) {
      return { result: false, message: error.message }
    }
  }


}