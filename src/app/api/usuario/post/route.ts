import { createUsuario, verificarUpdate} from '@/lib/services/usuarioService';
import { NextRequest, NextResponse } from 'next/server';

// POST - Criar o usuário
export async function POST(req: NextRequest) {
  try {
    const dataUsuario = await req.json(); // recebe dados da requisição
    const {id, email, telefone} = dataUsuario;

    // Verificar duplicidade de email e telefone
    const verificarDatas = await verificarUpdate(id, email, telefone);
    if (verificarDatas) {
      return NextResponse.json({ error: verificarDatas }, { status: 400 }); // Resposta de duplicidade
    };
    
    // Criação do usuário no banco
    const novoUsuario = await createUsuario(dataUsuario); 
    return NextResponse.json(novoUsuario, { status: 201 }); // Resposta bem-sucedida
  } catch (erro) {
    console.error(erro);
    return NextResponse.json({ error: 'Erro ao criar usuário.' }, { status: 500 }); // Resposta de erro
  };
}