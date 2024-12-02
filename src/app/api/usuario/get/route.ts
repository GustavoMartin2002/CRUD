import { getAllUsuarios, getUsuarioEmail } from "@/lib/services/usuarioService";
import { NextRequest, NextResponse } from "next/server";

// GET -  puxa o usuário através do email || puxa todos os usuários
export async function GET(req: NextRequest) {
  try{
    const {searchParams} = new URL(req.url); // Extrai os parâmetros da URL
    const email = searchParams.get('email'); // Busca o parâmetro "email"

    // Se o email existir, busca o usuário específico
    if (email) {
      const usuario = await getUsuarioEmail(email);

      if (!usuario){
        return NextResponse.json(
          { error: 'Usuário não encontrado.' }, 
          { status: 404 } // Resposta de não encontrado
        );
      };
      return NextResponse.json(usuario, { status: 200 }); // Resposta bem-sucedida
    } else {
      // Caso contrário, retorna todos os usuários
      const listaUsuarios = await getAllUsuarios();
      return NextResponse.json(listaUsuarios, { status: 201 }) // Resposta bem-sucedida
    };
  } catch (erro) {
    console.error(erro)
    return NextResponse.json(
      { error: 'Erro ao puxar dados do usuario.' }, 
      { status: 500 } // Resposta de erro
    ); 
  };
}