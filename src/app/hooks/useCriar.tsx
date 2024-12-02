import { useState } from "react";
import Swal from "sweetalert2";

interface FormData {
    nome: string;
    email: string;
    telefone: string;
    nascimento: string
}

export function useCriar(){
    // criação de estados do formulario
    const [loading, setLoading] = useState(false);
    

    // funcao para criar usuario pegando os dados do formulario
    const criarUsuario = async (usuario: FormData) => {
        try {
            setLoading(true);

            const response = await fetch('/api/usuario/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({...usuario}),
            });

            let data;
            try {
                data = await response.json();
            } catch (erro) {
                console.error(erro)
                data = null;
            };

            if (!response.ok) {
                throw new Error(data.error || "Erro ao criar o Usuário.");
            };
            
            Swal.fire({
                background: "#0f2142",
                color: "white",
                title: "Sucesso!",
                text: `${data.nome} foi cadastrado com sucesso!`,
                icon: "success",
                confirmButtonColor: "#1f448a",
                confirmButtonText: "Ok"
            });
        } catch (erro) {
            Swal.fire({
                background: "#0f2142",
                color: "white",
                title: "Erro!",
                text: `${erro}`,
                icon: "error",
                confirmButtonColor: "#1f448a",
                confirmButtonText: "Ok"
            });
        } finally {
            setLoading(false);
        };
    };

    return {loading, criarUsuario};
}