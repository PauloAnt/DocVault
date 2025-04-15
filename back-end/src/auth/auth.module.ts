import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [JwtModule.register({
    secret: process.env.SECRET_KEY,
    signOptions: { expiresIn: '1d' }
  })],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
