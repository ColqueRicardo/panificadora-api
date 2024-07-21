import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from 'src/admin/user/user.service';
import { TypeUserEnum } from 'src/libs/enum/user-type.enum';
import { IJwtAuth } from 'src/auth/auth.interface';

@Injectable()
export class AdminStrategy extends PassportStrategy(Strategy, "admin") {
  constructor(private userRepository: UserRepository) {
    super(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
      }
    );
  }

  async validate(iLocalAuth: IJwtAuth): Promise<IJwtAuth> {
    if (iLocalAuth.typeUserId != TypeUserEnum.ADMIN) throw new UnauthorizedException();
    const user = await this.userRepository.validateUser(iLocalAuth.id);
    if (!user) {
      throw new UnauthorizedException();
    }
    if (user.typeUserId != TypeUserEnum.ADMIN) {
      throw new UnauthorizedException();
    }
    return {
      id: user.id,
      email: user.email,
      typeUserId: user.typeUserId,
      name: user.name,
    }
  }
}

