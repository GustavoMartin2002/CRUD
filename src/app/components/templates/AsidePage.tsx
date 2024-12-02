'use client'

import { useState } from "react";
import { IconMenu2, IconX, IconUsers, IconHome, IconList, IconRefresh, IconTrash } from "@tabler/icons-react";
import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function AsidePage() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Função para definir as classes dos Links
    const linkClass = (route: string) => {
        if (pathname === route) {
            return "text-center py-3 bg-blue-950";
        }
        return "text-center py-3 hover:bg-blue-950 transition-colors";
    };

    return (
      <div>
        {/* Overlay para fechar o menu em dispositivos móveis */}
        {isOpen && (
            <div 
                className="fixed inset-0 z-10 bg-black bg-opacity-50 lg:hidden"
                onClick={() => setIsOpen(false)}>
            </div>
        )}

        <div id="burger" className="fixed p-5 right-px z-40">
            {/* Botão para alternar o menu em telas menores */}
            <button 
                className="lg:hidden background1 text-white p-2 rounded"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <IconX size={24} />: <IconMenu2 size={24} />}
            </button>
        </div>

        {/* Sidebar */}
        <aside
            id="aside"
            className={`h-screen bg-linear1 w-64 transform transition-transform duration-300 ease-in-out z-40  
            ${isOpen ? "translate-x0" : "-translate-x-full"} lg:translate-x-0`}
        >
            <div className="flex flex-col text-start gap-3 h-full">
                <Link href={"/"} className={linkClass("/")}>
                    <IconHome size={20} className="absolute mx-10"/><p>Home</p>
                </Link>

                <Link href={"/cadastrar"} className={linkClass("/cadastrar")}>
                    <IconUsers size={20} className="absolute mx-10"/><p>Cadastrar</p>
                </Link>

                <Link href={"/lista_usuarios"} className={linkClass("/lista_usuarios")}>
                    <IconList size={20} className="absolute mx-10"/><p>Lista de Usuários</p>
                </Link>

                <Link href={"/atualizar"} className={linkClass("/atualizar")}>
                    <IconRefresh size={20} className="absolute mx-10"/><p>Atualizar</p>
                </Link>

                <Link href={"/deletar"} className={linkClass("/deletar")}>
                    <IconTrash size={20} className="absolute mx-10"/><p>Deletar</p>
                </Link>
            </div>
        </aside>
      </div>
    );
}
