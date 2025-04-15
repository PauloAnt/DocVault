import { PrismaService } from "src/prisma/prisma.service";
import { UserDTO } from "../dto/UserDTO";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository{
    constructor(private prisma: PrismaService){}

    async findByEmail(email: string){
        return await this.prisma.user.findUnique({
            where: { email }
        })
    }

    async insert(data: UserDTO){
        return await this.prisma.user.create({ data });
    }
}