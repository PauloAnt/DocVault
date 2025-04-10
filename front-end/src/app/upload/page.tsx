'use client';

import Link from "next/link";
import Header from "../../components/Header";

export default function CreateDocument() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-neutral-800">
      <Header />

      <div className="flex flex-col items-center px-6 py-12 gap-6 w-full">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Preservar Novo Documento</h1>

        {/* Upload de arquivo */}
        <label className="w-full max-w-md flex flex-col items-center justify-center border-2 border-dashed border-blue-400 rounded-lg p-6 text-center cursor-pointer hover:bg-blue-50 transition">
          <span className="text-sm text-blue-600 font-semibold mb-2">Clique para selecionar o arquivo PDF</span>
          <input type="file" accept="application/pdf" className="hidden" />
        </label>

        {/* Campos de metadados */}
        <input
          type="text"
          placeholder="Autor"
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Categoria"
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="date"
          placeholder="Data de modificação"
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Tamanho do documento (ex: 2MB)"
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Botão de preservar */}
        <Link
          href="/upload"
          className="mt-4 w-full max-w-md flex justify-center items-center bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Preservar
        </Link>
      </div>
    </main>
  );
}
