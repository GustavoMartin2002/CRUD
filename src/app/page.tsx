import {IconHome } from "@tabler/icons-react";
import AsidePage from "./components/templates/AsidePage";
import Header from "./components/templates/Header";

export default function Home() {
  return (
    <div id="home" className="flex">
      <AsidePage/>

      <main id="main-home" className="flex flex-col h-screen w-screen">
        <Header icon={<IconHome size={30}/>} titulo={"CRUD"} subtitulo={"Create - Read - Update - Delete"}/>

        <div className="d-text mt-20 text-center px-52">
          <h1 className="text-5xl mb-5">Bem vindo!</h1>

          <p className="text-justify">Este sistema foi construído utilizando Next.js, um poderoso framework React que oferece renderização híbrida (SSR e SSG) para alta performance e experiência otimizada. Para a camada de banco de dados, empregamos o Prisma, um ORM de última geração que facilita as operações com o banco MySQL, garantindo flexibilidade, segurança e eficiência no gerenciamento de dados.</p>
        </div>
      </main>
    </div>
  );  
}
