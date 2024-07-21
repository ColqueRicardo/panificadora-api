import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { AuthService } from './internal-auth.service';
import { AdminAuthGuard } from './admin/internal-auth-admin.guard';
import { GenericResult } from 'src/libs/interfaces/result';
import { CustomerAuthGuard } from './customer/internal-auth-customer.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() encryptData: { data: string }) {
    return this.authService.signIn(encryptData.data);
  }

  @HttpCode(HttpStatus.OK)
  @Post('generate')
  generate(
    @Body("email") email: string,
    @Body("password") password: string
  ) {
    return this.authService.generate(email, password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('verify-code')
  verifyCode(
    @Body("email") email: string,
    @Body("code") code: string
  ) {
    return this.authService.verifyCode(email, code);
  }

  @HttpCode(HttpStatus.OK)
  @Post('generate-code')
  generateCode(
    @Body("email") email: string,
  ) {
    return this.authService.generateCode(email)
  }

  @UseGuards(AdminAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get('verify-token-admin')
  @UseGuards(AdminAuthGuard)
  async verifyAdminToken(): Promise<GenericResult> {
    return { result: true }
  }

  @Get('verify-token-customer')
  @UseGuards(CustomerAuthGuard)
  async verifyCustomerToken(): Promise<GenericResult> {
    return { result: true }
  }
}