import { useEffect, useState } from "react";
import { useModalAtualizar } from "../hooks/useModalAtualizar";
import {Input} from "@nextui-org/Input";
import Swal from "sweetalert2";

interface ModalProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  usuario: any;
  onClose: () => void;
}

interface FormData {
  id: number,
  nome: string;
  email: string;
  telefone: string;
  nascimento: string
}

export default function ModalAtualizar(props: ModalProps){
  // Lógica do modal estados do formulario 
  const {atualizarUsuario} = useModalAtualizar();
  const [formData, setFormData] = useState<FormData>({
    id: props.usuario.id,
    nome: "",
    email: "",
    telefone: "",
    nascimento: "",
  });

  // carrega informações do usuario no Input do ModalAtualizar
  useEffect(()=>{
    setFormData({
      id: props.usuario.id,
      nome: props.usuario.nome,
      email: props.usuario.email,
      telefone: props.usuario.telefone,
      nascimento: new Date(props.usuario.nascimento).toISOString().split("T")[0],
    });
  }, [setFormData, props.usuario]);

  // tratamento e mudança de valores no formulario
  const setForm = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.name === "nome"){
          setFormData({ ...formData, [e.target.name]: e.target.value.replace(/\d/g, "")})
      } else if (e.target.name === "telefone" || e.target.name === "id") {
          setFormData({ ...formData, [e.target.name]: e.target.value.replace(/\D/g, "")})
      } else{
          setFormData({ ...formData, [e.target.name]: e.target.value})
      }
  }

  // submit do formulario para atualizar usuario 
  const formSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

        // tratamentos dos dados no formulario
      if (
        formData.nome       == "" ||
        formData.email      == "" ||
        formData.telefone   == "" ||
        formData.nascimento == "" 
      ){
        Swal.fire({
            background: "#0f2142",
            color: "white",
            title: "Atenção!",
            text: "Preencha todos os campos para cadastrar o usuário.",
            icon: 'info',
            confirmButtonColor: "#1f448a",
            confirmButtonText: 'Ok'
        });
        return;
      };

      // tratamentos dos dados no formulario
      if (formData.telefone.length < 10) {
          alert("O telefone deve conter pelo menos 10 dígitos.");
          return;
      };
      
      try {
        await atualizarUsuario(formData);
        props.onClose();
      } catch (erro) {
        Swal.fire({
          background: "#0f2142",
          color: "white",
          title: "ERRO!",
          text: `${erro}`,
          icon: "error",
          confirmButtonColor: "#1f448a",
          confirmButtonText: "Ok"
        });
      };
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content p-5 bg-linear2 rounded-md shadow-md">
        <h2 className=" text-2xl font-bold mb-4 text-center">Atualizar Dados</h2>

        <form onSubmit={formSubmit} className="flex flex-col gap-5 px-16">
          <div className="flex justify-between items-center">
              <label className="uppercase font-bold">id:</label>
              <Input 
                name="id"
                type="number"
                value={formData.id}
                onChange={setForm}
                className="text-center w-20"
                isDisabled
              />
            </div>

          <div className="flex justify-between items-center">
            <label className="uppercase font-bold text-start">nome:</label>
            <Input 
              name="nome"
              type="text"
              value={formData.nome}
              onChange={setForm}
              className="nome w-52"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="uppercase font-bold">email:</label>
            <Input
              name="email"
              type="email"
              maxLength={100}
              value={formData.email} 
              onChange={setForm} 
              className="email w-60"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="uppercase font-bold">telefone:</label>
            <Input
              name="telefone"
              type="tel"
              maxLength={11}
              value={formData.telefone}
              onChange={setForm} 
              className="telefone w-40" 
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="uppercase font-bold">nascimento:</label>
            <Input
              name="nascimento"
              type="date" 
              value={formData.nascimento}
              onChange={setForm}
              className="nascimento w-36" 
            />
          </div>

          <div className="flex justify-center gap-5 text-white">
            <button type="submit" className="background1 p-3 rounded-full hover:transition-colors">Salvar</button>
            <button onClick={props.onClose} className="background1 p-3 rounded-full hover:transition-colors">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}