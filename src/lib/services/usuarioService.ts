import db from '@/lib/prisma';

interface Usuario{
  nome: string;
  email: string;
  telefone: string;
  nascimento: string;
};

type UpdateUsuario = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  nascimento: string;  
}

// CREATE
export async function createUsuario(data: Usuario){
  try {

    // Validação básica dos campos
    if (!data.nome || !data.email || !data.telefone || !data.nascimento) {
      throw new Error('Todos os campos são obrigatórios.');
    }

    // passa as informações para o banco
    const usuario = await db.usuario.create({
      data: {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        nascimento: new Date(data.nascimento), //converte de string para date 
      },
    });

    return usuario;
  } catch (erro) {
    console.error('Erro ao criar usuário:', erro);
    throw new Error('Erro ao criar usuário.');
  }
}


// GETS
export async function getUsuarioEmail(email: string) {
  try {
    return await db.usuario.findUnique({
      where: {
        email,
      },
    });
  } catch (erro) {
    console.error("Erro ao buscar usuário por email:", erro);
    throw new Error("Erro ao acessar o banco de dados.");
  };
}

export async function getAllUsuarios() {
  try {
    return await db.usuario.findMany();
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
  }
}


// FIND
export async function verificarUpdate(id: number, email: string, telefone: string) {
  const usuarioEmail = await db.usuario.findFirst({
    where: {
      email,
      NOT: { id }, // Ignorar o ID do próprio usuário
    },
  });

  if (usuarioEmail) {
    return "O e-mail informado já está em uso.";
  }

  const usuarioTelefone = await db.usuario.findFirst({
    where: {
      telefone,
      NOT: { id }, // Ignorar o ID do próprio usuário
    },
  });

  if (usuarioTelefone) {
    return "O telefone informado já está em uso."; 
  }

  return null; // Sem duplicidades
}


// UPDATE
export async function updateUsuario(usuario: UpdateUsuario){
  console.log('Dados para atualizar:', usuario);

  const updateUsuario = await db.usuario.update({
    where: {id: usuario.id},
    data:{
      nome: usuario.nome,
      email: usuario.email,
      telefone: usuario.telefone,
      nascimento: new Date (usuario.nascimento),
    },
  });

  return updateUsuario;
}


// DELETE
export async function deleteUsuario(id: number){
  const deletarUsuario = await db.usuario.delete({ 
    where: { id } 
  });

  return deletarUsuario;
};