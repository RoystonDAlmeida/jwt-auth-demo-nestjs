import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ProtectedController } from './auth.controller';
import { AdminController } from './auth.controller';

@Module({
  providers: [AuthService],
  controllers: [AuthController, ProtectedController, AdminController],
})
export class AuthModule {}
