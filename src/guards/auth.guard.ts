// Guards are a powerful feature in NestJS. They enable users access to routes depending on certain conditions.
// Guards are classes that implement the 'CanActivate' interface
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1]; // Extract token from authorization header

    if (!token) return false; // No token found

    try {
      const user = this.jwtService.verify(token); // Verify token
      request.user = user; // Attach user info to request object
      return true; // Token is valid, allow access
    } catch {
      return false; // Token is invalid, deny access
    }
  }
}
