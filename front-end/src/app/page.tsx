// src/app/page.tsx (ou src/pages/index.tsx se não for App Router)
'use client'

import { useEffect, useState } from 'react'
import Header from '../components/Header'
import DocumentTable from '../components/DocumentTable'
import { Search } from 'lucide-react'
import { fetchDocuments, DocumentDTO } from '@/services/document.service'

export default function Home() {
  const [docs, setDocs] = useState<DocumentDTO[]>([])
  const [search, setSearch] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [loading, setLoading] = useState(true)

  // carrega ao montar
  useEffect(() => {
    setLoading(true)
    fetchDocuments()
      .then(data => setDocs(data))
      .finally(() => setLoading(false))
  }, [])

  // filtra docs conforme busca + datas
  const filtered = docs.filter(doc => {
    const term = search.toLowerCase()
    const matchesMeta =
      doc.name.toLowerCase().includes(term) ||
      doc.author.toLowerCase().includes(term) ||
      doc.category.toLowerCase().includes(term)

    const created = new Date(doc.createdAt)
    const after = startDate ? created >= new Date(startDate) : true
    const before = endDate ? created <= new Date(endDate) : true

    return matchesMeta && after && before
  })

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Carregando documentos...</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-neutral-800">
      <Header />

      <section className="container mx-auto px-6 py-8">
        {/* filtros */}
        <form className="bg-white p-6 rounded-lg shadow flex flex-wrap gap-4 items-end">
          {/* busca */}
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium mb-1">Buscar por metadados</label>
            <div className="flex">
              <input
                type="text"
                placeholder="Nome, autor ou categoria"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="flex-1 border border-neutral-300 rounded-l px-4 py-2 focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={() => {}}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 rounded-r cursor-pointer"
              >
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* intervalo de datas */}
          <div>
            <label className="block text-sm font-medium mb-1">De</label>
            <input
              type="date"
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
              className="border border-neutral-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Até</label>
            <input
              type="date"
              value={endDate}
              onChange={e => setEndDate(e.target.value)}
              className="border border-neutral-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="button"
            onClick={() => {}}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 cursor-pointer rounded transition"
          >
            Filtrar
          </button>
        </form>

        {/* tabela */}
        <div className="mt-6">
          <DocumentTable docs={filtered} />
        </div>
      </section>
    </main>
)
}
