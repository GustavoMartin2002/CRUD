import { deleteUsuario } from "@/lib/services/usuarioService";
import { NextRequest, NextResponse } from "next/server";

// DELETE - Deletar usuário por ID
export async function DELETE(req: NextRequest) {
  try {
    const dataUsuario = await req.json();
    const {id} = dataUsuario

    if (!id) {
      return NextResponse.json({ error: "ID não fornecido." }, { status: 400 }); // Resposta de id não fornecido
    };
      
    //Deletar o usuário pelo ID
    await deleteUsuario(id); 
    return NextResponse.json({success: true}, { status: 200 }); // Resposta bem-sucedida
  } catch (erro) {
    console.error("Erro ao deletar usuário:", erro);
    return NextResponse.json({ error: 'Erro ao deletar usuário.' }, { status: 500 }); // Resposta de erro
  };
}