'use client'

import Header from "../components/Header"
import DocumentCard from "../components/DocumentCard";
import Link from "next/link"
import { Plus, Search } from 'lucide-react'

export default function Home() {
  return (
    <main className="h-screen w-screen bg-gradient-to-br from-blue-50 to-white text-neutral-800">
      <Header />
      
      <div className="w-full h-full flex flex-col px-6 py-10 gap-4">
        
        <div className="flex gap-4 w-full flex-wrap">
          
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

        <div className="flex flex-shrink-0 justify-center my-8">
            <Link
              href="/upload"
              className="w-[20%] flex items-center bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              <Plus size={18} />
              Preservar novo documento
            </Link>
        </div>

        <div>
          <DocumentCard />
        </div>

      </div>
    </main>
  )
}
