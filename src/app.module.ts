import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || 'defaultSecret', // Use environment variable for security
      signOptions: { expiresIn: '2h' }, // Token expiration time
    }),
    AuthModule,
  ],
})
export class AppModule {}

// The configuration sets up the JWT module to use a secret key ande defines the token's expiration time.
