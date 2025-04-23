// src/components/DocumentTable.tsx
'use client'

import Link from 'next/link'
import { Eye, Download, Plus } from 'lucide-react'

export type Documento = {
  id: string
  name: string
  author: string
  category: string
  createdAt: string
  status: 'Preservado' | 'Iniciada' | 'Falha'
  fileUrl: string
}

type Props = {
  docs: Documento[]
}

export default function DocumentTable({ docs }: Props) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-xl font-semibold text-blue-600">Documentos Preservados</h2>
        <Link
          href="/upload"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          <Plus size={16} /> Novo Documento
        </Link>
      </div>

      <table className="w-full text-left">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">Autor</th>
            <th className="px-4 py-2">Categoria</th>
            <th className="px-4 py-2">Data</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2 text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {docs.map(doc => (
            <tr key={doc.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-3">{doc.name}</td>
              <td className="px-4 py-3">{doc.author}</td>
              <td className="px-4 py-3">{doc.category}</td>
              <td className="px-4 py-3">{new Date(doc.createdAt).toLocaleDateString('pt-BR')}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    doc.status === 'Preservado'
                      ? 'bg-green-100 text-green-800'
                      : doc.status === 'Iniciada'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {doc.status}
                </span>
              </td>
              <td className="px-4 py-3 flex justify-center items-center gap-4">
                <Link href={`/document/${doc.id}`} className="hover:text-blue-600">
                  <Eye size={18} />
                </Link>
                <a href={doc.fileUrl} download className="hover:text-blue-600">
                  <Download size={18} />
                </a>
              </td>
            </tr>
          ))}
          {docs.length === 0 && (
            <tr>
              <td colSpan={6} className="p-4 text-center text-neutral-500">
                Nenhum documento encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
