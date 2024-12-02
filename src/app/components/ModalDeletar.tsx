import { useState } from "react";
import { useModalDeletar } from "../hooks/useModalDeletar";
import Swal from "sweetalert2";

interface ModalProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  usuario: any;
  onClose: () => void;
}

interface Data{
  id: number,
  nome: string;
  email: string;
  telefone: string;
  nascimento: string
}

export default function ModalAtualizar(props: ModalProps){
    const {deletarUsuario} = useModalDeletar();
    const [usuarioData] = useState<Data>({
        id: props.usuario.id,
        nome: props.usuario.nome,
        email: props.usuario.email,
        telefone: props.usuario.telefone,
        nascimento: props.usuario.nascimento,
    });

    // formatação para data e fuso horario do brasil
    function formatDate(dateString: string) {
        const date = new Date(dateString);
      
        // Corrige a data para o horário UTC antes de formatar
        const localDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
      
        return localDate.toLocaleDateString("pt-BR", {
          timeZone: "America/Sao_Paulo",
        });
    }

    // submit do formulario para atualizar usuario 
    const deletar = (e: React.FormEvent) => {
        e.preventDefault();

        try {
            Swal.fire({
                background: "#0f2142",
                color: "white",
                icon: "warning",
                title: "Deseja deletar o Usuário?",
                text: "Você não poderá reverter isso!",
                showConfirmButton: true,
                confirmButtonColor: "#de0a26",
                confirmButtonText: "Deletar",
                showDenyButton: true,
                denyButtonText: "Cancelar",
                denyButtonColor: "gray",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await deletarUsuario(usuarioData);
                    props.onClose();
                };
            });
        } catch (erro) {
            console.error(erro);
        };
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content p-5 bg-linear2 rounded-md shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Deletar Usuário</h2>

                <div className="d-text flex flex-col gap-5 px-16">
                    <div className="flex justify-between items-center">
                        <h5 className="uppercase font-bold">id:</h5>
                        <h5 className=" text-center rounded-md">{usuarioData.id}</h5>
                    </div>

                    <div className="flex justify-between items-center">
                        <h5 className="uppercase font-bold">Nome:</h5>
                        <h5 className=" text-center rounded-md">{usuarioData.nome}</h5>
                    </div>

                    <div className="flex justify-between items-center">
                        <h5 className="uppercase font-bold">Email:</h5>
                        <h5 className=" text-center rounded-md">{usuarioData.email}</h5>
                    </div>

                    <div className="flex justify-between items-center">
                        <h5 className="uppercase font-bold">Telefone:</h5>
                        <h5 className=" text-center rounded-md">{usuarioData.telefone}</h5>
                    </div>

                    <div className="flex justify-between items-center">
                        <h5 className="uppercase font-bold">Nascimento:</h5>
                        <h5 className=" text-center rounded-md">{formatDate(usuarioData.nascimento)}</h5>
                    </div>
        
                    <div className="flex justify-center gap-5">
                        <button onClick={deletar} className="background1 transition-colors p-3 rounded-full hover:transition-colors">Deletar</button>
                        <button onClick={props.onClose} className="background1 p-3 rounded-full hover:transition-colors">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}