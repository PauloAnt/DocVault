'use client'

import Header from '../../../components/Header'
import { Download } from 'lucide-react'

export default function Document() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-white text-neutral-800">
      <Header />

      <div className="flex flex-col items-center px-6 py-12 gap-6">
        <h1 className="text-3xl font-bold text-blue-600">relatorio.pdf</h1>

        {/* Metadados */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <p><span className="font-semibold">Data:</span> 10/04/2025</p>
          <p><span className="font-semibold">Status:</span> Preservado</p>
          <p><span className="font-semibold">Criador:</span> Paulo Antônio</p>
          <p><span className="font-semibold">Tamanho:</span> 2.3MB</p>
          <p><span className="font-semibold">Tipo:</span> PDF</p>
          <p><span className="font-semibold">Último acesso:</span> 12/04/2025</p>
        </div>

        {/* Botão de download */}
        <button
          className="mt-8 bg-blue-600 text-white flex items-center gap-2 px-6 py-2 rounded cursor-pointer hover:bg-blue-700 transition"
        >
          <Download size={18} />
          Baixar Documento
        </button>
      </div>
    </main>
  )
}
