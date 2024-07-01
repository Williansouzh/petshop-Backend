# Tutor API

API para gerenciamento de tutores.

## Instalação

Certifique-se de ter o Node.js e o npm instalados. Clone o repositório e execute o seguinte comando para instalar as dependências:

```
npm install
```

## Configuração

Antes de iniciar o servidor, configure as variáveis de ambiente necessárias, como conexão com banco de dados, chaves de API, etc. Renomeie o arquivo `.env.example` para `.env` e preencha as variáveis conforme necessário.

## Executando o Servidor

Para iniciar o servidor, execute o seguinte comando:

```
npm start
```

O servidor será executado na porta padrão `3000`, a menos que seja especificado de outra forma nas variáveis de ambiente.

## Documentação da API

A API é documentada usando Swagger. Você pode acessar a documentação da API em tempo real navegando para `/api-docs` após iniciar o servidor.

## Rotas

### GET /tutors

Recupera todos os tutores.

### POST /tutors

Cria um novo tutor.

### PATCH /tutors/:id

Atualiza um tutor existente pelo ID.

### DELETE /tutors/:id

Exclui um tutor pelo ID.

## Estrutura do Projeto

- `src/`
  - `controllers/` - Controladores da lógica de manipulação de dados.
  - `database/` - Configurações e modelos de banco de dados.
  - `repositories/` - Camada de acesso a dados.
  - `services/` - Lógica de negócios da aplicação.
  - `routes.ts` - Definição das rotas da API.

## Tecnologias Utilizadas

- Node.js
- Express
- Swagger
- TypeScript
- Mongo DB

## Contribuindo

1. Faça um fork do projeto
2. Crie sua branch (`git checkout -b feature/MinhaFeature`)
3. Faça commit de suas mudanças (`git commit -am 'Adicionando MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Crie um novo Pull Request

---
