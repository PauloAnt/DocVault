import { HttpStatus, Injectable } from '@nestjs/common';
import DocumentRepository from "./repository/document.repository";
import DocumentDTO from "./dto/DocumentDTO";
import DocumentException from "./exception/document.exception";

@Injectable()
export default class DocumentService {
  constructor(private repository: DocumentRepository) {}

  async findById(id: string) {
    try {
      return this.repository.findById(id);
    } catch (err) {
      console.log(err.message);
      throw new DocumentException("Erro ao procurar o ID do documento.", HttpStatus.NOT_FOUND);
    }
  }

  async findAll() {
    try {
      return this.repository.findAll();
    } catch (err) {
      console.log(err.message);
      throw new DocumentException("Erro ao listar todos os documentos.", HttpStatus.NOT_FOUND);
    }
  }

  async insert(data: DocumentDTO) {
    try {
      const simulation = this.ArchivematicaIntegration();

      const document = await this.repository.insert({
        ...data,
        archivematicaSipId: simulation.sipId,
        status: simulation.status,
      });

      return document;
    } catch (err) {
      console.log(err.message);
      throw new DocumentException("Erro ao inserir o documento.", HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string) {
    try {
      return this.repository.delete(id);
    } catch (err) {
      console.log(err.message);
      throw new DocumentException("Erro ao deletar o documento.", HttpStatus.NOT_FOUND);
    }
  }


  // Simulando o Archivematica

  private ArchivematicaIntegration(): {
    sipId: string;
    status: 'Preservado' | 'Iniciada' | 'Falha';
  } {
    const sipId = `sip-${Math.random().toString(36).substring(2, 10)}`;
    const statusOptions = ['Preservado', 'Iniciada', 'Falha'];
    const status = statusOptions[Math.floor(Math.random() * statusOptions.length)] as 'Preservado' | 'Iniciada' | 'Falha';

    return { sipId, status };
  }

  async fileReprocess(id: string) {
    const existing = await this.repository.findById(id);
  
    if (!existing) {
      throw new DocumentException("Documento não encontrado para simulação.", HttpStatus.NOT_FOUND);
    }
  
    const simulation = this.ArchivematicaIntegration();
  
    const updated = await this.repository.update(id, {
      archivematicaSipId: simulation.sipId,
      status: simulation.status,
      lastAccessedAt: new Date().toISOString()
    });
  
    return updated;
  }
  
}
