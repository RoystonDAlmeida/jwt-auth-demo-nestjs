import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async register(signUpDto: SignUpDto) {
    // Logic to save user to database goes here
    return 'User registered successfully!';
  }

  async login(loginDto: LoginDto) {
    // This method creates a JWT token using the user's email
    const payload = { email: loginDto.email }; // Create payload for JWT
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' }); // Longer expiration for refresh token

    return {
      access_token: this.jwtService.sign(payload), // Generate JWT token
      refresh_token: refreshToken,
    };
  }

}
