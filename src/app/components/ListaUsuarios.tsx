import ItemLista from "./templates/ItemLista";
import { IconRefresh } from "@tabler/icons-react";
import { useLista } from "../hooks/useLista";
import { Input } from "@nextui-org/Input";

export default function ListaUsuarios(){
  const {query, setQuery, filtroUsuario, atualizarLista} = useLista();
  
  return(
    <div id="listaUsuarios" className="flex flex-col h-screen shadow-xl p-2 shadow-slate-900 overflow-y-auto">
      <button 
        onClick={atualizarLista} 
        className="absolute flex mx-5 gap-2 p-5 background1 rounded-3xl hover:transition-colors">
        <p>Atualizar Lista</p>
        <IconRefresh/>
      </button>

      <div className="d-input flex justify-center my-5">
        <Input
          placeholder="Procure por Nome, Email ou Telefone..."
          value={query}
          onChange={e=> setQuery(e.target.value)}
          type="search"
          className="w-96"
        />
      </div>

      <div className="d-lista flex flex-col gap-5 px-72 mb-32 text-center">
        {filtroUsuario.length > 0 ? (filtroUsuario.map((usuario) => (
          <ItemLista key={usuario.id} id={usuario.id} nome={usuario.nome} email={usuario.email} telefone={usuario.telefone} nascimento={usuario.nascimento} />
          ))
        ) : (
          <h4>Nenhum usuário encontrado.</h4>
        )}
      </div>
    </div>
  );
}