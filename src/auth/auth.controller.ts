import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() signUpDto: SignUpDto) {
    return this.authService.register(signUpDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}

// The register route handles user registration.
// The login route handles user authentication and returns a JWT

@Controller('protected')
@UseGuards(AuthGuard)
export class ProtectedController {
  @Get()
  getProtectedResource() {
    return 'This is a protected resource!';
  }
}

// Protect Routes with Roles Guard
@Controller('admin')
@UseGuards(AuthGuard, RolesGuard)
@Roles('admin') // Only allow access to users with 'admin' role
export class AdminController {
  constructor(private readonly jwtService: JwtService) {}
  @Get()
  getAdminResource() {
    // Provide the Bearer token in authorization headers to get access to this resource.
    return 'This is an admin resource!';
  }

  @Post('refresh') // This endpoint allows clients to obtain a new access token using their refresh token
  async refresh(@Body() body) {
    // Provide Bearer token in authorization headers
    const newAccessToken = this.jwtService.sign({ email: body.email });
    return { access_token: newAccessToken };
  }
}
