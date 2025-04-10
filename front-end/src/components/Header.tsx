'use client'

import Link from "next/link";
import { LogOut } from "lucide-react";

export default function Header(){
    const handleLogout = () => {
        return
    }
    return (
        <header className="bg-blue-600 text-white font-bold">
            <nav className="flex justify-between py-4">
                <div className="ml-12">
                    <Link className="px-4" href="/">HOME</Link>
                </div>
                <div className="mr-12">
                    <button className="flex items-center gap-2 cursor-pointer" onClick={handleLogout}>Sair <LogOut size={22}/></button>
                </div>
            </nav>
        </header>
    )
}