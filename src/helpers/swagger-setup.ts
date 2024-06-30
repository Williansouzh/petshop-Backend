import swaggerJsdoc from "swagger-jsdoc";

// Configuração das opções do Swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "PetShop API Rest",
      version: "1.0.0",
      description: "Descrição da sua API",
    },
  },
  apis: ["./src/routes/*.ts"], // Caminho para os arquivos de rota onde os comentários da API estão
};

// Inicializar o swagger-jsdoc
export const specs = swaggerJsdoc(options);
