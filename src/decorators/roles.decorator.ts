// Role-Based Access Control(RBAC) in NestJS is a method for restricting access to resources
// based on the roles assigned to users within an application.
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
