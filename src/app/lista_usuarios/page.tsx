'use client'

import { IconList } from "@tabler/icons-react";
import AsidePage from "../components/templates/AsidePage";
import Header from "../components/templates/Header";
import ListaUsuarios from "../components/ListaUsuarios";

export default function listaClientes(){
  return (
    <div className="flex overflow-hidden">
      <AsidePage/>

      <main id="main-lista_usuarios" className="flex flex-col h-screen w-screen">
          <Header icon={<IconList size={30}/>} titulo={"LISTA"} subtitulo={"Lista de Usuários"}/>
          
          <div>
            <ListaUsuarios/>
          </div>
      </main>
    </div>
  );
}