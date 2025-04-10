'use client'

import Header from "../components/Header"
import DocumentTable from "../components/DocumentTable"
import Link from "next/link"
import { Plus, Search } from 'lucide-react'

export default function Home() {
  const documentos = [
    {
      id: '001',
      name: 'relatorio.pdf',
      date: '10/04/2025',
      status: 'Preservado'
    }
  ]

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-white text-neutral-800">
      <Header />
      
      <div className="w-full h-full flex flex-col px-6 py-10 gap-4">

        {/* Campo de pesquisa */}
        <div className="flex justify-center gap-4 w-full flex-wrap mb-8">
          <div className="flex flex-1 justify-center items-center gap-2">
            <input
              type="text"
              placeholder="Pesquisar por metadados"
              className="border border-neutral-300 rounded px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
              <Search className="cursor-pointer" size={20} />
            </button>
          </div>
        </div>

        {/* Filtro por intervalo de datas */}
        <div className="flex gap-4 justify-center items-center mb-8">
            <input
              type="date"
              className="border border-neutral-300 rounded px-4 py-2"
            />
            <span>Até</span>
            <input
              type="date"
              className="border border-neutral-300 rounded px-4 py-2"
            />
        </div>

        <div className="flex flex-col items-center w-full">
          <DocumentTable docs={documentos} />
        </div>

      </div>
    </main>
  )
}
