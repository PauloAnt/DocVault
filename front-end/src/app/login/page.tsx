'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '../../components/Header';
import { login, LoginDTO } from '../../services/auth.service';
import { jwtDecode } from 'jwt-decode';  

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState<LoginDTO>({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { token } = await login(form);

      const decoded: any = jwtDecode(token);

      localStorage.setItem('accessToken', token);
      localStorage.setItem('userId', decoded.id);

      router.push('/');
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || 'Usuário ou senha inválidos.');
    }
  };

  return (
    <main className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-white text-neutral-800">
      <div className="flex flex-col bg-white p-10 rounded-2xl shadow-xl w-[90%] max-w-md border border-neutral-200">
        
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-600">Bem-vindo de volta!</h2>
          <p className="text-sm text-neutral-600 mt-1">
            Não tem conta?{' '}
            <Link href="/register" className="text-blue-600 underline">
              Cadastre-se
            </Link>
          </p>
          <hr className="my-4 border-neutral-200" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Digite seu email"
            type="email"
            required
          />
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Digite sua senha"
            type="password"
            required
          />
          <div className="flex items-center text-sm text-neutral-600">
            <input type="checkbox" className="mr-2 accent-blue-600" />
            <span>Lembrar-me</span>
          </div>
          <button
            type="submit"
            className="cursor-pointer bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 rounded-lg mt-2 shadow-sm"
          >
            Entrar
          </button>
        </form>

        <p className="text-xs text-center text-neutral-500 mt-4">
          Esqueceu sua senha?{' '}
          <Link href="/forgot-password" className="text-blue-600 underline">
            Clique aqui
          </Link>
        </p>
      </div>
    </main>
  );
}
