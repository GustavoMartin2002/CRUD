'use client'

import AsidePage from "../components/templates/AsidePage";
import Header from "../components/templates/Header";
import { IconRefresh } from '@tabler/icons-react'
import Atualizar from "../components/Atualizar";

export default function atualizar(){
    return (
        <div className="flex">
            <AsidePage/>
    
            <main id="main-atualizar" className="flex flex-col h-screen w-screen">
                <Header icon={<IconRefresh size={30}/>} titulo={"ATUALIZAR"} subtitulo={"Atualizar Usuários"}/>
                
                <div className="m-auto">
                    <Atualizar/>
                </div>
          </main>
        </div>
    );
}