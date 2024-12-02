'use client'

import AsidePage from "../components/templates/AsidePage";
import Header from "../components/templates/Header";
import { IconTrash } from '@tabler/icons-react'
import Deletar from "../components/Deletar";

export default function deletar(){
    return (
        <div className="flex">
            <AsidePage/>
    
            <main id="main-deletar" className="flex flex-col h-screen w-screen">
                <Header icon={<IconTrash size={30}/>} titulo={"DELETAR"} subtitulo={"Deletar Clientes"}/>

                <div className="m-auto">
                    <Deletar/>
                </div>
            </main>
        </div>
    );
}