'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import { createDocument } from '@/services/document.service';

export default function CreateDocument() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) return router.push('/login');

    try {
      const id = localStorage.getItem('userId');
      console.log(id)
      setUserId(id);
    } catch (err) {
      console.error("Erro ao decodificar token:", err);
      router.push('/login');
    }
  }, [router]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) {
      setFile(f);
      setSize(`${(f.size / 1024 / 1024).toFixed(2)}MB`);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      alert('Preencha todos os campos necessários.');
      return;
    }
    const id = userId ?? '';

    try {
      await createDocument({
        name: file.name,
        author,
        category,
        createdAt: new Date().toISOString(),
        lastAccessedAt: new Date().toISOString(),
        size,
        fileUrl: file.name,
        userId: id,
      });
      router.push('/');
    } catch (err) {
      console.error(err);
      alert('Erro ao preservar documento.');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-neutral-800">
      <Header />
      <div className="flex flex-col items-center px-6 py-12 gap-6 w-full">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Preservar Novo Documento</h1>

        <label className="w-full max-w-md flex flex-col items-center justify-center border-2 border-dashed border-blue-400 rounded-lg p-6 text-center cursor-pointer hover:bg-blue-50 transition">
          <span className="text-sm text-blue-600 font-semibold mb-2">Clique para selecionar o arquivo PDF</span>
          <input type="file" accept="application/pdf" className="hidden" onChange={handleFileChange} />
        </label>

        <input
          value={author}
          onChange={e => setAuthor(e.target.value)}
          type="text"
          placeholder="Autor"
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-md"
        />

        <input
          value={category}
          onChange={e => setCategory(e.target.value)}
          type="text"
          placeholder="Categoria"
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-md"
        />

        <input
          value={size}
          readOnly
          type="text"
          placeholder="Tamanho do documento"
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-md bg-gray-100"
        />

        <button
          onClick={handleSubmit}
          className="cursor-pointer mt-4 w-full max-w-md flex justify-center items-center bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Preservar
        </button>
      </div>
    </main>
  );
}
