'use client'

import Link from "next/link"
import { LogOut } from "lucide-react"

export default function Header() {
  const handleLogout = () => {
    // lógica do logout
    return
  }

  return (
    <header className="bg-blue-600 text-white font-bold w-full">
      <nav className="flex justify-between items-center w-full max-w-7xl mx-auto px-6 py-4">
        <Link className="px-4" href="/">HOME</Link>

        <button
          className="flex items-center gap-2 cursor-pointer hover:text-gray-100"
          onClick={handleLogout}
        >
          Sair <LogOut size={22} />
        </button>
      </nav>
    </header>
  )
}
