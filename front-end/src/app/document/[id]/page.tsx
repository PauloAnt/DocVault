'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Header from '../../../components/Header'
import { Download } from 'lucide-react'
import { fetchDocument, DocumentDTO } from '@/services/document.service'

export default function DocumentPage() {
  const { id } = useParams()                   
  const [doc, setDoc] = useState<DocumentDTO | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!id) return
    setLoading(true)
    fetchDocument(id)
      .then(setDoc)
      .catch(err => {
        console.error(err)
        setError('Não foi possível carregar o documento.')
      })
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Carregando documento…</p>
      </main>
    )
  }

  if (error || !doc) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">{error || 'Documento não encontrado.'}</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-white text-neutral-800">
      <Header />

      <div className="flex flex-col items-center px-6 py-12 gap-6">
        <h1 className="text-3xl font-bold text-blue-600">{doc.name}</h1>

        {/* Metadados */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <p><span className="font-semibold">Data de Criação:</span> {new Date(doc.createdAt).toLocaleDateString()}</p>
          <p><span className="font-semibold">Status:</span> {doc.status}</p>
          <p><span className="font-semibold">Autor:</span> {doc.author}</p>
          <p><span className="font-semibold">Tamanho:</span> {doc.size}</p>
          <p><span className="font-semibold">Categoria:</span> {doc.category}</p>
          <p><span className="font-semibold">Último Acesso:</span> {new Date(doc.lastAccessedAt).toLocaleDateString()}</p>
        </div>

        {/* Visualização do PDF */}
        <div className="w-full max-w-3xl h-[600px] border rounded overflow-hidden">
          <iframe
            src={doc.fileUrl}
            className="w-full h-full"
            title="Preview do Documento"
          />
        </div>

        {/* Botão de download */}
        <a
          href={doc.fileUrl}
          download={doc.name}
          className="mt-8 bg-blue-600 text-white flex items-center gap-2 px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          <Download size={18} />
          Baixar Documento
        </a>
      </div>
    </main>
  )
}
