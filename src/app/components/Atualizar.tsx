import ModalUpdate from "@/app/components/ModalAtualizar";
import { useAtualizar }  from "../hooks/useAtualizar";
import {Input} from "@nextui-org/Input";

export default function Atualizar(){
    const {email, setEmail, showModal, usuarioData, close, getEmail} = useAtualizar();
    
    return (
        <div id="atualizar" className="flex flex-col gap-3">
            <h2 className="text-2xl text-center italic">Insira seu email para alterar seus dados: </h2>
            
            <div className="d-inputButton flex justify-center gap-5">
                <Input
                
                    name="email"
                    type="email"
                    placeholder="Insira seu email..."
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    className="w-64 p-2"
                    tabIndex={1}
                    
                />
                
                <button 
                    onClick={getEmail} 
                    className="p-3 rounded-3xl background1 hover:transition-colors"
                >
                    Alterar Dados
                </button>
            </div>

            <div>
                {showModal && (
                    <ModalUpdate usuario={usuarioData} onClose={close} />
                )}
            </div>
        </div>
    );
}
