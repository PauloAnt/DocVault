import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import DocumentService from './document.service';
import DocumentDTO from './dto/DocumentDTO';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Documents')
@Controller('document')
export class DocumentController {
    constructor(private service: DocumentService){}

    @Get(":id")
    @ApiOperation({ summary: 'Buscar documento por ID' })
    @ApiResponse({ status: 404, description: 'Documento não encontrado pelo ID.' })
    async findById(@Param('id') id: string){
        return this.service.findById(id);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os documentos' })
    async findAll(){
        return this.service.findAll();
    }
    
    @Post()
    @ApiOperation({ summary: 'Criar um novo documento' })
    @ApiResponse({ status: 201, description: 'Documento criado com sucesso.' })
    @ApiResponse({ status: 400, description: 'Erro ao criar documento.' })
    async insert(@Body() data: DocumentDTO){
        return this.service.insert(data);
    }

    @Put('/file/:id')
    @ApiOperation({ summary: 'Preservação de documento' })
    @ApiResponse({ status: 200, description: 'Documento reprocessado com sucesso.' })
    @ApiResponse({ status: 404, description: 'Documento não encontrado.' })
    async filePreservation(@Param('id') id: string) {
        return this.service.fileReprocess(id);
    }
    
    
    @Delete(':id')
    @ApiOperation({ summary: 'Remover documento pelo ID' })
    @ApiResponse({ status: 404, description: 'ID não encontrado' })
    async delete(@Param('id') id: string){
        return this.service.delete(id)
    }

}
