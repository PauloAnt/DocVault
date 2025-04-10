'use client'

import { Eye, Download, Plus } from 'lucide-react'
import Link from 'next/link'

type Documento = {
    id: string
    name: string
    date: string
    status: 'Preservado' | 'Iniciada' | 'Falha'
  }
  
type Props = {
    docs: Documento[]
}

export default function DocumentTable({ docs } : Props){
    
    return (
        <div className='w-[80%]'>
            <h1 className="text-2xl mt-12 text-blue-600 font-bold text-center">Documentos preservados</h1>
            <div className="flex w-full flex-shrink-0 justify-start mb-8 mt-2">
                <Link
                href="/upload"
                className="w-[25%] flex items-center bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                <Plus size={18} />
                Preservar novo documento
                </Link>
            </div>

            <table className='w-full text-center text-gray-700 border-1 border-neutral-200'>
                <thead className='text-[16px] uppercase border-1 border-neutral-200'>
                    <tr>
                        <th className='py-6 px-4'>ID</th>
                        <th className='py-6 px-4'>Nome</th>
                        <th className='py-6 px-4'>Data</th>
                        <th className='py-6 px-4'>Status</th>
                        <th className='py-6 px-4'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {docs.map((doc) => (
                        <tr key={doc.id}>
                            <td className='py-6 px-4'>{doc.id}</td>
                            <td className='py-6 px-4'>{doc.name}</td>
                            <td className='py-6 px-4'>{doc.date}</td>
                            <td className='py-6 px-4'>{doc.status}</td>


                            <td className='flex py-6 px-4 gap-2 justify-center items-center'>
                                
                                <Eye /> 
                                
                                <Download />
                            
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}