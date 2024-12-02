import { ReactNode } from "react"

export interface HeaderProps{
    icon: ReactNode,
    titulo: string,
    subtitulo: string
}

export default function Header(props: HeaderProps){
    return(
        <header id="header" className="flex items-center p-7 w-full">
            <div className="icon self-start absolute">{props.icon}</div>

            <div className="flex flex-col text-center m-auto">
                <h1 className="text-4xl uppercase">{props.titulo}</h1>
                <h4 className="text-sm">{props.subtitulo}</h4>
            </div>
        </header>
    );
}