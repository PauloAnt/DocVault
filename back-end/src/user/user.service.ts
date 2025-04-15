import { HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { UserDTO } from './dto/UserDTO';
import { UserException } from './exception/UserException';

@Injectable()
export class UserService {
    constructor(private readonly repository: UserRepository){}

    async findByEmail(email: string){
        try{
            return await this.repository.findByEmail(email);
        }
        catch(err){
            console.log(err.message);
            throw new UserException("Email não registrado.", HttpStatus.NOT_FOUND);
        }
    }

    async insert(data: UserDTO){
        try{
            return await this.repository.insert(data);
        }
        catch(err){
            console.log(err.message);
            throw new UserException("Error ao cadastrar usuário.", HttpStatus.NOT_FOUND);
        }
    }
}
