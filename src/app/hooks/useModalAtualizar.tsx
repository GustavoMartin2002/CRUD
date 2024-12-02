import Swal from "sweetalert2";

interface FormData {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    nascimento: string;
}

export function useModalAtualizar(){
    async function atualizarUsuario (usuario: FormData){
        const response = await fetch('/api/usuario/put', {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
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
            throw new Error(data.error || "Erro ao atualizar o Usuário.");
        };

        Swal.fire({
            background: "#0f2142",
            color: "white",
            title: "Sucesso!",
            text: "Usuário foi atualizado com sucesso!",
            icon: "success",
            confirmButtonColor: "#1f448a",
            confirmButtonText: "Ok"
        });        
    };

    return{ atualizarUsuario };
};