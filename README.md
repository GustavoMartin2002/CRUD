# CRUD

Uma aplicação moderna e funcional que permite o gerenciamento de usuários através de uma interface intuitiva e organizada. Desenvolvido com foco em performance e boas práticas, este projeto demonstra o uso de tecnologias atuais como Next.js, TypeScript, Prisma e MySQL para construção de um CRUD (Create, Read, Update, Delete) completo.

---

## 📋 Sobre a Aplicação

Este projeto é um CRUD básico para gerenciar usuários, com funcionalidades de criação, leitura, atualização e exclusão. Ele foi desenvolvido como uma demonstração prática de um sistema funcional utilizando tecnologias modernas de front-end e back-end.

⚠️ **O projeto não possui autenticação e só pode ser rodado localmente após a configuração do banco de dados MySQL e do Prisma. Ele não está preparado para produção sem ajustes adicionais.**

---

## ⚙️ Como Funciona

1. **Cadastro de Usuários**: Permite inserir informações como nome, e-mail, telefone e data de nascimento.
2. **Listagem**: Exibe todos os usuários cadastrados.
3. **Atualização**: Possibilidade de editar os dados de um usuário.
4. **Exclusão**: Remoção de registros do banco de dados.

A aplicação é **inteiramente local** e depende de uma configuração adequada do Prisma e do banco MySQL na máquina do usuário.

## 🛠️ Compatibilidade com Outros Bancos de Dados
Embora o projeto tenha sido configurado para funcionar com MySQL, ele pode ser facilmente adaptado para outros bancos de dados como PostgreSQL, SQLite ou SQL Server. Basta alterar a string de conexão no arquivo .env e atualizar o esquema do Prisma para refletir a nova configuração. Consulte a documentação oficial do Prisma para mais detalhes sobre como configurar outros bancos de dados.

---

## 🛠️ Configuração do Projeto

### 1. Pré-requisitos
- Node.js >= 18.x
- Banco de dados MySQL configurado e rodando localmente
- Git instalado

### 2. Clonando o Repositório
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### 3. Instalando Dependências
```bash
npm install
```

### 4. Configurando o Prisma
- Crie um arquivo .env na raiz do projeto e configure a variável DATABASE_URL com a string de conexão do banco de dados:
``` bash
DATABASE_URL="mysql://user:password@localhost:3306/nome_do_banco"
```
- Gere os arquivos do Prisma e configure o banco de dados:
``` bash
npx prisma generate
npx prisma db push
```

### 5. Rodando o Projeto
``` bash
npm run dev
```
Acesse a aplicação em: http://localhost:3000
---

## 🧰 Tecnologias Utilizadas
- **TypeScript:** Linguagem de tipagem estática para JavaScript.
- **Next.js:** Framework React para construção de aplicações modernas.
- **MySQL:** Banco de dados relacional utilizado no backend.
- **Prisma:** ORM para integração com o banco de dados.

## 📚 Bibliotecas Utilizadas

- <a href="https://tabler.io/icons">Tabler Icons</a>: Biblioteca de ícones modernos para melhorar a interface.
- <a href="https://sweetalert2.github.io/">SweetAlert2 (Swal)</a>: Biblioteca para alertas estilizados e modais interativos.
- <a href="https://nextui.org/">NextUI</a>: Biblioteca de componentes para interface do usuário.

## 🎨Estilização e Animações
- **CSS:** Estilo base utilizado para ajustes específicos.
- **Tailwind CSS:** Framework utilitário para estilização rápida e responsiva.
- **Animações:** Usadas para melhorar a experiência do usuário, principalmente em feedbacks visuais.

## 🚀 Funcionalidades Futuras
- Implementar autenticação para gerenciamento seguro de usuários.
- Hospedar a aplicação em um serviço como Vercel ou AWS.
- Adicionar testes automatizados para garantir a qualidade do código.

---

### Este projeto foi desenvolvido com o objetivo de demonstrar um CRUD funcional e de fácil adaptação para diferentes contextos. Ele é uma base sólida para aprendizado ou para projetos mais robustos no futuro. Sinta-se à vontade para explorar o código e configurar conforme suas necessidades.
