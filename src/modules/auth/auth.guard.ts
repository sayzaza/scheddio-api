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
    const token = this.extractTokenFromHeader(request);
    console.log('token = ', token);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      console.log('token = ', token);
      const payload = await this.localJwtService.validate(token);
      console.log('payload = ', payload);
      request.user = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
