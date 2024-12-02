import ModalDeletar from "@/app/components/ModalDeletar";
import { useDeletar }  from "../hooks/useDeletar";
import { Input } from "@nextui-org/Input";

export default function Deletar(){
    const {email, setEmail, showModal, usuarioData, close, getEmail} = useDeletar();
    
    return (
        <div id="deletar" className="flex flex-col gap-3">
            <h2 className="text-2xl text-center italic">Insira o email para Deletar o usuário: </h2>
            
            <div className="d-inputButton flex justify-center gap-5">
                <Input 
                    type="email" 
                    value={email}
                    placeholder="Insira seu email..."
                    onChange={e => setEmail(e.target.value)} 
                    className="w-64" 
                />
                
                <button 
                    onClick={getEmail} 
                    className="p-3 rounded-3xl background1 hover:transition-colors "
                >
                    Deletar Usuário
                </button>
            </div>

            <div>
                {showModal && (
                    <ModalDeletar usuario={usuarioData} onClose={close} />
                )}
            </div>
        </div>
    );
}
