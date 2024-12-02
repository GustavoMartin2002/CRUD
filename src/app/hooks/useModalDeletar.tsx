import Swal from "sweetalert2";

interface FormData {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    nascimento: string;
}

export function useModalDeletar(){
    async function deletarUsuario(usuario: FormData) {
        const response = await fetch("/api/usuario/delete", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        });
    
        let data;
        try {
            data = await response.json();
        } catch (erro) {
            console.error(erro)
            data = null;
        };
    
        if (!response.ok) {
            throw new Error(data.error || "Erro ao deletar o usuário.");
        };
    
        Swal.fire({
            background: "#0f2142",
            color: "white",
            title: "Sucesso!",
            text: "Usuário deletado com sucesso!",
            icon: "success",
            confirmButtonColor: "#1f448a",
            confirmButtonText: "Ok"
        }); 
        return data;
    };
    
    return { deletarUsuario };
};