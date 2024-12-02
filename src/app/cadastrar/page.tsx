'use client'

import AsidePage from "../components/templates/AsidePage";
import Header from "../components/templates/Header";
import { IconUsers } from '@tabler/icons-react'
import Form from "../components/FormCriar";

export default function cadastrar(){
  return (
    <div className="flex">
        <AsidePage/>

        <main id="main-cadastrar" className="flex flex-col h-screen w-screen">
          <Header icon={<IconUsers id="icon" size={30}/>} titulo={"CADASTRAR"} subtitulo={"Cadastro de Usuários"}/>

          <div className="m-auto">
            <Form/>
          </div>  
      </main>
    </div>
  );
}