const jsonServer = require('json-server');
const auth = require('json-server-auth');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const port = process.env.PORT || 3001;

const app = jsonServer.create();
const router = jsonServer.router('db.json');

app.db = router.db;

const rules = auth.rewriter({
  users: 644,
  products: 644,
  cart: 660,
});

app.use(cors());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log('O servidor está rodando na porta:', port);
console.log('Documentação Swagger disponível em: http://localhost:' + port + '/api-docs');
