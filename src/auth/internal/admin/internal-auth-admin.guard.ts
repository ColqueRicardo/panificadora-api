import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AdminAuthGuard extends AuthGuard('admin') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    // si el jwt es invalido info tendra un valor de JsonWebTokenError: invalid signature pero igual fallara porq no reconocera el token
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
