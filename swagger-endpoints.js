/**
 * @swagger
 * /users:
 *   get:
 *     summary: Listar todos os usuários
 *     description: Retorna uma lista de todos os usuários cadastrados na plataforma
 *     tags:
 *       - Usuários
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Registrar novo usuário
 *     description: Cria uma nova conta de usuário e retorna um token de acesso
 *     tags:
 *       - Autenticação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - first_name
 *               - last_name
 *             properties:
 *               email:
 *                 type: string
 *                 example: bruno@teste.com
 *               password:
 *                 type: string
 *                 example: '123456'
 *               first_name:
 *                 type: string
 *                 example: Bruno
 *               last_name:
 *                 type: string
 *                 example: Guedes Rodrigues
 *               age:
 *                 type: integer
 *                 example: 33
 *               phone_number:
 *                 type: string
 *                 example: '31999979217'
 *               zip_code:
 *                 type: string
 *                 example: '32310370'
 *               address:
 *                 type: string
 *                 example: 'acácias 1860 eldorado'
 *               complement:
 *                 type: string
 *                 example: 'ap304'
 *               city:
 *                 type: string
 *                 example: contagem
 *               state:
 *                 type: string
 *                 example: 'minas gerais'
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: Erro na validação dos dados
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *             examples:
 *               emailRequired:
 *                 value: "Email and password are required"
 *               emailExists:
 *                 value: "Email already exists"
 *               passwordShort:
 *                 value: "Password is too short"
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Fazer login
 *     description: Autentica um usuário e retorna um token de acesso
 *     tags:
 *       - Autenticação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: bruno@teste.com
 *               password:
 *                 type: string
 *                 example: '123456'
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: Erro na autenticação
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *             examples:
 *               userNotFound:
 *                 value: "Cannot find user"
 *               incorrectPassword:
 *                 value: "Incorrect password"
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Listar todos os produtos
 *     description: Retorna uma lista de todos os produtos disponíveis
 *     tags:
 *       - Produtos
 *     responses:
 *       200:
 *         description: Lista de produtos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */

/**
 * @swagger
 * /cart:
 *   get:
 *     summary: Listar carrinho do usuário
 *     description: Retorna o carrinho de compras do usuário autenticado
 *     tags:
 *       - Carrinho
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Carrinho retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cart'
 *       401:
 *         description: Não autorizado - Token inválido ou ausente
 */

/**
 * @swagger
 * /cart:
 *   post:
 *     summary: Criar novo carrinho ou adicionar primeiro produto
 *     description: Cria um novo carrinho de compras ou adiciona o primeiro produto
 *     tags:
 *       - Carrinho
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cart'
 *     responses:
 *       201:
 *         description: Carrinho criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       401:
 *         description: Não autorizado - Token inválido ou ausente
 */

/**
 * @swagger
 * /cart/{id}:
 *   patch:
 *     summary: Atualizar carrinho
 *     description: Atualiza a quantidade de produtos ou o valor total do carrinho
 *     tags:
 *       - Carrinho
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do carrinho
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 41
 *               products:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/CartProduct'
 *     responses:
 *       200:
 *         description: Carrinho atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       401:
 *         description: Não autorizado - Token inválido ou ausente
 */

/**
 * @swagger
 * /cart/{id}:
 *   delete:
 *     summary: Deletar carrinho
 *     description: Remove o carrinho e todos os produtos nele contidos
 *     tags:
 *       - Carrinho
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do carrinho
 *     responses:
 *       200:
 *         description: Carrinho deletado com sucesso
 *       401:
 *         description: Não autorizado - Token inválido ou ausente
 */

