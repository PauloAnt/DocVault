'use client'

import { useState } from "react"

export default function Login() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica do login
  }

  return (
    <main className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-white text-neutral-800">
      <div className="flex flex-col bg-white p-10 rounded-2xl shadow-xl w-[90%] max-w-md border border-neutral-200">
        
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-600">Bem-vindo de volta!</h2>
          <p className="text-sm text-neutral-600 mt-1">
            Não tem conta? <b className="text-blue-600 underline cursor-pointer">Cadastre-se</b>
          </p>
          <hr className="my-4 border-neutral-200" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Digite seu usuário"
            type="text"
          />
          <input
            className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Digite sua senha"
            type="password"
          />
          <div className="flex items-center text-sm text-neutral-600">
            <input type="checkbox" className="mr-2 accent-blue-600" />
            <span>Lembrar-me</span>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 rounded-lg mt-2 shadow-sm"
          >
            Entrar
          </button>
        </form>

        <p className="text-xs text-center text-neutral-500 mt-4">
          Esqueceu sua senha? <b className="text-blue-600 underline cursor-pointer">Clique aqui</b>
        </p>
      </div>
    </main>
  )
}
