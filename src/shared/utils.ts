import { Request } from 'express';

export function makeAuthorizationHeader(req: Request) {
  const token = extractTokenFromHeader(req);
  return {
    Authorization: `Bearer ${token}`,
  };
}


function extractTokenFromHeader(request: Request): string | undefined {
  const [type, token] = request.headers.authorization?.split(' ') ?? [];
  return type === 'Bearer' ? token : undefined;
}