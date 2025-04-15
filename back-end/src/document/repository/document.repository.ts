import { PrismaService } from "src/prisma/prisma.service";
import DocumentDTO from "../dto/DocumentDTO";

export default class DocumentRepository{
    constructor(private prisma: PrismaService){}

    async findById(id: string){
        return await this.prisma.document.findUnique({
            where: {
                id: id
            }
        })
    }

    async findAll(){
        return await this.prisma.document.findMany()
    }

    async insert(data: DocumentDTO){
        return await this.prisma.document.create({ data });
    }

    async delete(id: string){
        return await this.prisma.document.delete({
            where: {
                id: id
            }
        })
    }

}