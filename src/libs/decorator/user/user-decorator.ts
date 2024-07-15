import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IJwtAuth } from 'src/auth/auth.interface';

export interface ICurrentUser {
  userId: number,
  email: string
}

export const GetCurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): IJwtAuth => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
