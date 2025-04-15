import { Module } from '@nestjs/common';
import { DocumentController } from './document.controller';
import DocumentService from './document.service';
import DocumentRepository from './repository/document.repository';

@Module({
  controllers: [DocumentController],
  providers: [DocumentService, DocumentRepository],
  exports: [DocumentService]
})
export class DocumentModule {}
