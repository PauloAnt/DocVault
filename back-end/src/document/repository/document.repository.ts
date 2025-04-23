import { PrismaService } from "src/prisma/prisma.service";
import DocumentDTO from "../dto/DocumentDTO";
import { Injectable } from "@nestjs/common";

@Injectable()
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

    async insert(data: DocumentDTO) {
        return await this.prisma.document.create({
          data: {
            name: data.name,
            author: data.author,
            category: data.category,
            createdAt: data.createdAt,
            lastAccessedAt: data.lastAccessedAt,
            size: data.size,
            fileUrl: data.fileUrl,
            archivematicaSipId: data.archivematicaSipId,
            status: data.status,
      
            user: {
              connect: {
                id: data.userId, 
              },
            },
          },
        });
      }
      

    async update(id: string, data: Partial<DocumentDTO>) {
        return await this.prisma.document.update({
          where: { id },
          data
        });
    }
      

    async delete(id: string){
        return await this.prisma.document.delete({
            where: {
                id: id
            }
        })
    }

}