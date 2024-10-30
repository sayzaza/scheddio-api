import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { LocalJwtService } from './local-jwt.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private localJwtService: LocalJwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.session.data.id_token;
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.localJwtService.validate(token);
      request.user = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

}
