import { HttpStatus, Injectable } from '@nestjs/common';
import DocumentRepository from "./repository/document.repository";
import DocumentDTO from "./dto/DocumentDTO";
import DocumentException from "./exception/document.exception";

@Injectable()   
export default class DocumentService {
    constructor(private repository: DocumentRepository){}

    async findById(id: string){
        try{
            return this.repository.findById(id);
        }
        catch(err){
            console.log(err.message)
            throw new DocumentException("Error ao procurar o ID do documento.", HttpStatus.NOT_FOUND);
        }
    }

    async findAll(){
        try{
            return this.repository.findAll();
        }
        catch(err){
            console.log(err.message)
            throw new DocumentException("Error mostrar todos os documento.", HttpStatus.NOT_FOUND);
        }
    }

    async insert(data: DocumentDTO){
        try{
            return this.repository.insert(data);
        }
        catch(err){
            console.log(err.message)
            throw new DocumentException("Error ao inserir o documento.", HttpStatus.BAD_REQUEST);
        }
    }

    async delete(id: string){
        try{
            return this.repository.delete(id);
        }
        catch(err){
            console.log(err.message)
            throw new DocumentException("Error ao delete o documento.", HttpStatus.NOT_FOUND);
        }
    }
}
