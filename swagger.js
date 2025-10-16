const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hamburgueria 2.0 API',
      version: '2.0.0',
      description:
        'API de uma hamburgueria fake com JSON Server. Usuários podem se cadastrar, fazer login e gerenciar seu carrinho de compras.',
      contact: {
        name: 'Bruno BGR',
        url: 'https://github.com/brunobgr',
      },
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'Servidor de desenvolvimento',
      },
      {
        url: 'https://hamburgueria-2-0-api.onrender.com',
        description: 'Servidor de produção',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Token JWT obtido após login ou registro',
        },
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1,
            },
            email: {
              type: 'string',
              example: 'bruno@teste.com',
            },
            password: {
              type: 'string',
              example: '123456',
            },
            first_name: {
              type: 'string',
              example: 'Bruno',
            },
            last_name: {
              type: 'string',
              example: 'Guedes Rodrigues',
            },
            age: {
              type: 'integer',
              example: 33,
            },
            phone_number: {
              type: 'string',
              example: '31999979217',
            },
            zip_code: {
              type: 'string',
              example: '32310370',
            },
            address: {
              type: 'string',
              example: 'acácias 1860 eldorado',
            },
            complement: {
              type: 'string',
              example: 'ap304',
            },
            city: {
              type: 'string',
              example: 'contagem',
            },
            state: {
              type: 'string',
              example: 'minas gerais',
            },
          },
          required: ['email', 'password', 'first_name', 'last_name'],
        },
        Product: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              example: '1',
            },
            name: {
              type: 'string',
              example: 'Big Kenzie',
            },
            category: {
              type: 'string',
              example: 'Sanduíches',
            },
            price: {
              type: 'number',
              example: 18,
            },
            image: {
              type: 'string',
              example: 'product01',
            },
          },
        },
        CartProduct: {
          type: 'object',
          properties: {
            productId: {
              type: 'string',
              example: '1',
            },
            name: {
              type: 'string',
              example: 'Big Kenzie',
            },
            category: {
              type: 'string',
              example: 'Sanduíches',
            },
            price: {
              type: 'number',
              example: 18,
            },
            image: {
              type: 'string',
              example: 'product01',
            },
            quantity: {
              type: 'string',
              example: '1',
            },
          },
        },
        Cart: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1,
            },
            time: {
              type: 'string',
              example: '2022-01-07 12:35:21',
            },
            userId: {
              type: 'integer',
              example: 1,
            },
            amount: {
              type: 'number',
              example: 41,
            },
            products: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/CartProduct',
              },
            },
          },
        },
        AuthResponse: {
          type: 'object',
          properties: {
            accessToken: {
              type: 'string',
              example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
            },
            user: {
              $ref: '#/components/schemas/User',
            },
          },
        },
      },
    },
  },
  apis: ['./swagger-endpoints.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
