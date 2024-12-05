
README - Aplicação CRUD Alunos
Descrição
Este projeto é composto por duas partes principais:

crud-learn: Backend desenvolvido com NestJS para gerenciar operações CRUD relacionadas a alunos.
consumo-api: Frontend simples em HTML e JavaScript que consome a API e exibe os dados em uma interface web.
Configuração e Execução
1. Configurar e Iniciar o Backend
Acesse a pasta do backend e inicie o servidor:

bash
Copiar código
cd crud-learn
nest start
O backend será iniciado e ficará disponível no endereço:
http://localhost:3000

2. Iniciar o Frontend
Após o backend estar em execução:

Navegue até a pasta do frontend:

bash
Copiar código
cd consumo-api
Abra o arquivo HTML no navegador de sua preferência:

Selecione o arquivo index.html e abra-o diretamente no navegador.
Estrutura do Projeto
crud-learn (Backend)
Desenvolvido com NestJS.
Exposição de endpoints para gerenciar alunos:
GET /aluno/all - Lista todos os alunos.
GET /aluno/id/:id - Busca um aluno pelo ID.
POST /aluno - Adiciona um novo aluno.
consumo-api (Frontend)
Interface HTML + JavaScript para interagir com a API:
Exibe a lista de alunos.
Permite cadastrar novos alunos.
Filtra alunos por ID.
Uso da Aplicação
Acesse a aplicação pelo navegador na interface do frontend.
Utilize os seguintes recursos:
Visualizar todos os alunos.
Adicionar um novo aluno informando ID, Nome, e RA.
Filtrar alunos pelo ID no campo de busca.
Requisitos
Node.js (para rodar o backend).
Um navegador atualizado para o frontend.
Observações
Certifique-se de que o backend crud-learn está rodando antes de abrir o frontend.
Caso encontre problemas com CORS, ajuste as configurações no backend (main.ts do NestJS).
Divirta-se usando o sistema! 🎉
