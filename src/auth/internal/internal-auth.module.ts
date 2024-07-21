import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './internal-auth.controller';
import { AuthService } from './internal-auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AdminAuthGuard } from './admin/internal-auth-admin.guard';
import { User } from 'src/admin/user/entity/user.entity';
import { UserModule } from 'src/admin/user/user.module';
import { CustomerAuthGuard } from './customer/internal-auth-customer.guard';
import { AdminStrategy } from './admin/internal-auth-admin-jwt.strategy';
import { CustomerStrategy } from './customer/internal-auth-customer-jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '60m' },
      }),
      inject: [ConfigService],
    }),
    forwardRef(() => UserModule)
  ],
  providers: [AuthService, AdminStrategy, CustomerStrategy, AdminAuthGuard, CustomerAuthGuard],
  controllers: [AuthController],
  exports: [AdminAuthGuard, CustomerAuthGuard]
})
export class AuthModule {
}
