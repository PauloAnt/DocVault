'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { register as registerUser, RegisterDTO } from '../../services/auth.service';
import Header from '../../components/Header';

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState<RegisterDTO>({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (form.password !== form.confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    try {
      await registerUser({
        email: form.email,
        username: form.username,
        password: form.password,
      });
      router.push('/login');
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || 'Erro ao criar conta.');
    }
  };

  return (
    <main className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-white text-neutral-800">
      <div className="flex flex-col bg-white p-10 rounded-2xl shadow-xl w-[90%] max-w-md border border-neutral-200">
        
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-600">Faça seu registro!</h2>
          <p className="text-sm text-neutral-600 mt-1">
            Já tem conta?{' '}
            <b
              className="text-blue-600 underline cursor-pointer"
              onClick={() => router.push('/login')}
            >
              Entrar
            </b>
          </p>
          <hr className="my-4 border-neutral-200" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}
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
            name="username"
            value={form.username}
            onChange={handleChange}
            className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Digite seu usuário"
            type="text"
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
            minLength={6}
          />
          <input
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Confirmar senha"
            type="password"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 rounded-lg mt-4 shadow-sm cursor-pointer"
          >
            Criar
          </button>
        </form>
      </div>
    </main>
  );
}
