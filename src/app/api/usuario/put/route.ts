import { updateUsuario, verificarUpdate } from "@/lib/services/usuarioService";
import { NextRequest, NextResponse } from "next/server";

// PUT - Atualizar usuário por ID
export async function PUT(req: NextRequest) {
  try {
    const dataUsuario = await req.json();
    const {id, email, telefone} = dataUsuario

    // Verificar duplicidade de email e telefone
    const verificarDatas = await verificarUpdate(id, email, telefone);
    if (verificarDatas) {
      return NextResponse.json({ error: verificarDatas }, { status: 400 }); // Resposta de duplicidade
    }
    
    // Atualizar dados do usuário
    const atualizarUsuario = await updateUsuario(dataUsuario);
    return NextResponse.json(atualizarUsuario, { status: 200 }); // Resposta bem-sucedida
  } catch (erro) {
    console.error(erro);
    return NextResponse.json({ error: 'Erro ao atualizar usuário.' }, { status: 500 }); // Resposta de erro
  };
}