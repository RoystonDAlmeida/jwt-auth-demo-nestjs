// Roles Guard - Used to check if the user has the required roles to access a route
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core'; // Used to retrieve metadata about the required roles

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    if (!requiredRoles) return true; // If no roles defined, allow access

    const request = context.switchToHttp().getRequest();
    const user = request.user; // Get user info attached by AuthGuard

    return requiredRoles.some((role) => user.roles?.includes(role)); // Check if user has required roles
  }
}

// This guard checks if the authenticated user has the necessary roles to access certain routes.
