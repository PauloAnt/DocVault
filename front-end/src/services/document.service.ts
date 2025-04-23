import api from './api';

export interface DocumentDTO {
  id?: string;
  name: string;
  author: string;
  category: string;
  createdAt: string;
  lastAccessedAt: string;
  status: string;
  size: string;
  fileUrl: string;
  archivematicaSipId?: string;
  userId: string;
}

export const fetchDocuments = () =>
  api.get<DocumentDTO[]>('/document').then(res => res.data);

export const fetchDocument = (id: string) =>
  api.get<DocumentDTO>(`/document/${id}`).then(res => res.data);

export const createDocument = (doc: Omit<DocumentDTO, 'id' | 'status' | 'archivematicaSipId'>) =>
  api.post<DocumentDTO>('/document', doc).then(res => res.data);

export const deleteDocument = (id: string) =>
  api.delete<void>(`/document/${id}`).then(res => res.data);

export const simulatePreservation = (id: string) =>
  api.put<DocumentDTO>(`/document/simulate/${id}`).then(res => res.data);
