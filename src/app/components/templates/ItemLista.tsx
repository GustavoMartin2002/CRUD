interface ItemListaProps {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    nascimento: string;
}

export default function ItemLista(props: ItemListaProps){
    // formatação para data e fuso horario do brasil
    function formatDate(dateString: string) {
        const date = new Date(dateString);
      
        // Corrige a data para o horário UTC antes de formatar
        const localDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
      
        return localDate.toLocaleDateString("pt-BR", {
          timeZone: "America/Sao_Paulo",
        });
    };

    return(
        <div key={props.id} id="itemLista" className="flex flex-col gap-2 py-5 px-10 rounded-3xl background3 shadow-2xl">
            <div className="flex justify-between gap-3">
                <span className="uppercase font-bold">id:</span>
                <span className="">{props.id}</span>
            </div>

            <div className="flex justify-between gap-3">
                <span className="uppercase font-bold">nome:</span>
                <span className="">{props.nome}</span>
            </div>

            <div className="flex justify-between gap-3">
                <span className="uppercase font-bold">email:</span>
                <span className="">{props.email}</span>
            </div>

            <div className="flex justify-between gap-3">
                <span className="uppercase font-bold">telefone:</span>
                <span className="">{props.telefone}</span>
            </div>

            <div className="flex justify-between gap-3">
                <span className="uppercase font-bold">nascimento:</span>
                <span className="">{formatDate(props.nascimento)}
                </span>
            </div>          
        </div>
    );
}