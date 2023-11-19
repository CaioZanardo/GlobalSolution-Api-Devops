# Conteúdo criado para Global Solution de DIGITAL EXPERIENCE PLATAFORM(BackEnd) + OPTIMIZATION-TECHNOLOGY(FrontEnd) + CYBER SECURITY DEVOPS

### Banco de Dados

- Criar Banco "logindb";
- Criar Tabela "usuarios";
- são 3 colunas:
  - idusuarios(Auto increment + chave primária);
  - email;
  - password;

![PRINT!](tabela.png)

### Backend

- no diretório "api" utilizar o npm start para iniciar a aplicação;
- /register funcionalidade criada para ser utilizado pelo front para cadastrar um usuário;
- /login funcionalidade criada para ser utilizado pelo front;
- /listaAtividade retorna a lista de atividades:
  - Via front é exibida após usuário cadastrado se autenticar;
  - Pode ser chamada via postman para obter o resultado:
    - Metodo: Get
    - URL: "http://localhost:3001/listaAtividade"
   
![PRINT!](postman.png)

### GitActions

- Criado para validar se aplicação está funcionando! Validando o retorno do json no path: "http://localhost:3001/listaAtividade"

### Frontend

- https://github.com/CaioZanardo/GlobalSolution-Optimization
  
## Grupo

- André Spinelli Cintra RM 551016
- Augusto de Oliveira Laurino RM 93498
- Caio Felipe Britto Zanardo da Silva RM 95125
- Gabriel Wilke Azevedo RM 95211
- Guilherme de Lucas Garcia RM 94392
