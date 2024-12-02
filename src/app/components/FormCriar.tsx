import React, { useState } from "react";
import { useCriar } from "../hooks/useCriar";
import {Input} from "@nextui-org/Input";
import Swal from "sweetalert2";

interface FormData {
    nome: string;
    email: string;
    telefone: string;
    nascimento: string;
}

export default function FormCriar() {
    // estados do formulario e valores do usuario
    const {loading, criarUsuario} = useCriar();
    const [formData, setFormData] = useState<FormData>({
        nome: "",
        email: "",
        telefone: "",
        nascimento: "",
    });

    // tratamento e mudança de valores no formulario
    const setForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "nome"){
            setFormData({ ...formData, [e.target.name]: e.target.value.replace(/\d/g, "")})
        } else if (e.target.name === "telefone") {
            setFormData({ ...formData, [e.target.name]: e.target.value.replace(/\D/g, "")})
        } else{
            setFormData({ ...formData, [e.target.name]: e.target.value})
        }
    };

    // submit do formulario para criar o usuário 
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
            Swal.fire({
                background: "#0f2142",
                color: "white",
                title: "Atenção!",
                text: "O telefone deve conter pelo menos 10 dígitos.",
                icon: 'info',
                confirmButtonColor: "#1f448a",
                confirmButtonText: 'Ok'
            });
            return;
        };

        try{
            await criarUsuario(formData);
        } catch (erro) {
           console.error(erro)
        };
    };
    
    return (
        <form
            id="form"
            className="flex flex-col gap-3 text-black"
            onSubmit={formSubmit}
        >
            <div className="flex gap-8 justify-between items-center mb-3">
                <label className="text-white font-bold">Nome:</label>
                <Input 
                    className="p-2"
                    name="nome"
                    type="text"
                    maxLength={100}
                    placeholder="Nome completo..."
                    value={formData.nome}
                    onChange={setForm}
                />
            </div>

            <div className="flex justify-between items-center mb-3">
                <label className="text-white font-bold">Email:</label>
                <Input 
                    className="p-2 w-56" 
                    name="email"
                    type="email"
                    placeholder="Email..."
                    maxLength={100} 
                    value={formData.email}
                    onChange={setForm}
                />
            </div>

            <div className="flex justify-between items-center mb-3">
                <label className="text-white font-bold">Telefone:</label>
                <Input 
                    className="p-2 w-36"
                    name="telefone" 
                    type="tel"
                    placeholder="Telefone..."
                    maxLength={11} 
                    value={formData.telefone}
                    onChange={setForm}
                />
            </div>

            <div className="flex justify-between items-center mb-3">
                <label className="text-white font-bold">Nascimento:</label>
                <Input 
                    className="p-2 w-36" 
                    name="nascimento"
                    type="date"
                    value={formData.nascimento}
                    onChange={setForm}
                />
            </div>

            <button 
                type="submit" 
                disabled={loading} 
                className="text-white background1 p-3 rounded-2xl hover:transition-colors "
            >{loading ? "Cadastrando..." : "Cadastrar"}</button>
        </form>
    );
}