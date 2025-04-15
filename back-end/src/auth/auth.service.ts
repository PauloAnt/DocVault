import { HttpStatus, Injectable } from '@nestjs/common';
import { UserDTO } from 'src/user/dto/UserDTO';
import { UserService } from 'src/user/user.service';
import { AuthDTO } from './dto/AuthDTO';
import { AuthException } from './exception/AuthException';

import bcrypt from 'bcrypt';

import dotenv from "dotenv";
import { JwtService } from '@nestjs/jwt';
dotenv.config();

@Injectable()
export class AuthService {
    constructor(
        private readonly service: UserService,
        private readonly jwtService: JwtService
    ){}

    async login(data: AuthDTO){
        try{
            const user : UserDTO | null = await this.service.findByEmail(data.email);
            if(!user){
                console.log("Credenciais inválidas.");
                throw new AuthException("Credenciais inválidas.", HttpStatus.UNAUTHORIZED);
            }

            if (!(await bcrypt.compare(data.password, user.password))){
                console.log("Credenciais inválidas.");
                throw new AuthException("Credenciais inválidas.", HttpStatus.UNAUTHORIZED);
            }

            const payload = {
                email: user.email,
                username: user.username
            }

            const token = this.jwtService.sign(payload)

            return token;
        }
        catch(err){
            console.log(err.message)
            throw new AuthException("Error ao fazer o login.", HttpStatus.UNAUTHORIZED);
        }
    }

    async register(data: UserDTO){
        try{
            data.password = await bcrypt.hash(data.password, 10);
            return await this.service.insert(data);
        }
        catch(err){
            console.log(err.message)
            throw new AuthException("Error ao se cadastrar.", HttpStatus.BAD_REQUEST);
        }
    }
}
