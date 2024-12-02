import { useState } from "react";
import Swal from "sweetalert2";

type Usuario = {
    id: number,
    nome: string,
    email: string,
    telefone: string,
    nascimento: string,
}

export function useAtualizar(){
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [usuarioData, setUsuarioData] = useState<Usuario | null>()
    
  async function getEmail(){
    if (!email) {
      Swal.fire({
        background: "#0f2142",
        color: "white",
        title: "Atenção!",
        text: "Por favor, insira um email válido.",
        icon: "info",
        confirmButtonColor: "#1f448a",
        confirmButtonText: "Ok"
      });
      return;
    };

    try {
      const response = await fetch("/api/usuario/get?email=" + email, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUsuarioData(data); // Guarda os dados do usuário
        setShowModal(true); // Abre o modal
      } else {
        Swal.fire({
          background: "#0f2142",
          color: "white",
          title: "Atenção!",
          text: "Usuário não encontrado.",
          icon: "info",
          confirmButtonColor: "#1f448a",
          confirmButtonText: "Ok"
        });
        setShowModal(false);
      };
    } catch (erro) {
      console.error("Erro ao buscar o usuário:", erro);
      throw new Error("Erro ao buscar o usuário.")
    };
  };

  // Limpa o estado quando o modal é fechado
  function close() {
    setShowModal(false);
    setUsuarioData(null);
    setEmail("");
  };
        
  return { email, setEmail, showModal, setShowModal, usuarioData, close, getEmail };
};