import { useEffect, useState } from "react";

interface Usuario {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    nascimento: string;
};

export function useLista(){
    const [query, setQuery] = useState(""); // estado de busca (search)
    const [usuarios, setUsuarios] = useState<Usuario[]>([]); // Estado de todos os usuários
    const [filtroUsuario, setFiltroUsuario] = useState<Usuario[]>([]); // estado de usuários filtrados

    // renderiza usuarios assim que entrar na pagina
    useEffect(()=>{
        atualizarLista();
      }, []);

    // Atualiza os usuários filtrados sempre que digitar na barra de busca
    useEffect(()=>{
        const queryLower = query.toLowerCase();

        const filtrados = usuarios.filter(
            (usuario)=>
                usuario.nome.toLocaleLowerCase().includes(queryLower)   ||
                usuario.email.toLocaleLowerCase().includes(queryLower)  ||
                usuario.telefone.includes(query)
        );

        setFiltroUsuario(filtrados);
    },[query, usuarios]);

    // função para atualizar a lista
    async function atualizarLista(){
        try{
            const response = await fetch('/api/usuario/get');
            
            if(!response.ok){
                throw new Error('Erro ao buscar usuarios');
            };

            const data: Usuario[] = await response.json();
            setUsuarios(data);
        } catch (erro) {
            console.error(erro)
        };
    };
    return {query, setQuery, filtroUsuario, atualizarLista};
};