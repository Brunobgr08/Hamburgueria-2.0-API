<h1 align="center">
  <img alt="Hamburgueria" title="Hamburgueria" src="https://fv2-3.failiem.lv/thumb_show.php?i=86bfuxe86&view" width="100px" />
</h1>

<h1 align="center">
  Hamburgueria 2.0 - API
</h1>

<p align = "center">
Este é o backend da aplicação Hamburgueria 2.0 - Uma database fake do Json-Server onde usuários podem visualizar uma lista de produtos. Após se cadastrar e logar, o usuário pode adicionar produtos da lista predefinida ao seu carrinho de compras. O objetivo dessa aplicação é praticar a criação de um backend fake através do Json-Server e Json-Server-Auth.
</p>

<p align="center">
  <a href="#endpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

## **Endpoints**

A API tem um total de 6 endpoints, sendo relacionados ao usuário e seu carrinho de compras - cadastrar-se, logar-se, adicionar produtos à "cesta", atualizar quantidade de produtos na "cesta", remover produtos da "cesta".<br/>

O url base da API é https://hamburgueira-2-0.herokuapp.com

## Rotas que não precisam de autenticação

<h2 align ='center'> Listando Usuários </h2>

Nessa aplicação o usuário sem fazer login ou se cadastrar pode ver os usuários já cadastrados na plataforma. Aqui conseguimos ver os usuários e suas informações básicas.
Na API podemos acessar a lista dessa forma:

`GET /users - FORMATO DA RESPOSTA - STATUS 200`

```json
[
  {
    "email": "bruno@teste.com",
    "password": "$2a$10$84OeoBd/X3unFArpijzIKOpAUCx4dyijng/SYjSN9lJeeydINEoPe",
    "first_name": "Bruno",
    "last_name": "Guedes Rodrigues",
    "age": 33,
    "phone_number": "31999979217",
    "zip_code": "32310370",
    "address": "acácias 1860 eldorado",
    "complement": "ap304",
    "city": "contagem",
    "state": "minas gerais",
    "id": 1
  },
  {
    "email": "kenzinho@mail.com",
    "password": "$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",
    "first_name": "Kenzinho",
    "last_name": "Test",
    "age": 38,
    "phone_number": "61989579283",
    "zip_code": "35638967",
    "address": "aviadores 152 praia",
    "complement": "ap304",
    "city": "ceilândia",
    "state": "distrito federal",
    "id": 2
  }
]
```

<h2 align ='center'> Criação de Usuário </h2>

`POST /register - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "bruno@teste.com",
  "password": "123456",
  "first_name": "Bruno",
  "last_name": "Guedes Rodrigues",
  "age": 33,
  "phone_number": "31999979217",
  "zip_code": "32310370",
  "address": "acácias 1860 eldorado",
  "complement": "ap304",
  "city": "contagem",
  "state": "minas gerais"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /register - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJydW5vQHRlc3RlLmNvbSIsImlhdCI6MTY0MjU5NjMzNCwiZXhwIjoxNjQyNTk5OTM0LCJzdWIiOiIxIn0.hYEnt-ERExXZjfxpV9tZCAmzYRSkmf8VUJUrAy5UvtY",
  "user": {
    "email": "bruno@teste.com",
    "first_name": "Bruno",
    "last_name": "Guedes Rodrigues",
    "age": 33,
    "phone_number": "31999979217",
    "zip_code": "32310370",
    "address": "acácias 1860 eldorado",
    "complement": "ap304",
    "city": "contagem",
    "state": "minas gerais",
    "id": 1
  }
}
```

<h3 align ='center'> Possíveis erros no Cadastro </h3>

Caso você acabe errando e mandando algum campo errado, a resposta de erro será assim:
No exemplo a requisição foi feita faltando o campo "email" e/ou "password".

`POST /register - `
` FORMATO DA RESPOSTA - STATUS 400`

```json
"Email and password are required"
```

Email já cadastrado:

`POST /register - `
` FORMATO DA RESPOSTA - STATUS 400`

```json
"Email already exists"
```

A senha necessita de no mínimo 4 caracteres.

`POST /register - `
` FORMATO DA RESPOSTA - STATUS 400`

```json
"Password is too short"
```

<h2 align = "center"> Login </h2>

`POST /login - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "bruno@teste.com",
  "password": "123456"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /login - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJydW5vQHRlc3RlLmNvbSIsImlhdCI6MTY0MjU5NzAxOCwiZXhwIjoxNjQyNjAwNjE4LCJzdWIiOiIxIn0.X5b4sFiUZEaCbQ8UnG1O0A44eWShtr7hirj4WBdCXkk",
  "user": {
    "email": "bruno@teste.com",
    "first_name": "Bruno",
    "last_name": "Guedes Rodrigues",
    "age": 33,
    "phone_number": "31999979217",
    "zip_code": "32310370",
    "address": "acácias 1860 eldorado",
    "complement": "ap304",
    "city": "contagem",
    "state": "minas gerais",
    "id": 1
  }
}
```

Com essa resposta, teremos duas informações, o user e o token respectivo, podendo guardá-las no localStorage para fazer a gestão do usuário no seu frontend.

<h3 align ='center'> Possíveis erros no Login </h3>

Email / usuário não cadastrado/encontrado:

`POST /login - `
` FORMATO DA RESPOSTA - STATUS 400`

```json
"Cannot find user"
```

Senha incorreta:

`POST /login - `
` FORMATO DA RESPOSTA - STATUS 400`

```json
"Incorrect password"
```

<h2 align ='center'> Listando Produtos </h2>

Nessa aplicação o usuário sem fazer login ou se cadastrar pode ver os produtos disponíveis na plataforma. Aqui visualizar a lista de produtos e suas informações básicas.
Na API podemos acessar a lista dessa forma:

`GET /products - FORMATO DA RESPOSTA - STATUS 200`

```json
[
  {
    "id": "1",
    "name": "Big Kenzie",
    "category": "Sanduíches",
    "price": 18,
    "image": "product01"
  },
  {
    "id": "2",
    "name": "X-Burguer",
    "category": "Sanduíches",
    "price": 16,
    "image": "product02"
  },
  {
    "id": "3",
    "name": "Chicken Cheddar",
    "category": "Sanduíches",
    "price": 14,
    "image": "product03"
  }
]
```

## Rotas que necessitam de autorização

Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}
> Após o usuário estar logado, ele deve conseguir adicionar, atualizar e deletar produtos do carrinho de compras.

<h2 align ='center'>Cart</h2>

<h3 align ='center'>Listar Carrinho</h3>

`GET /cart - FORMATO DA RESPOSTA - STATUS 200`

```json
[
  {
    "time": "2022-01-07 12:35:21",
    "userId": 1,
    "amount": 41,
    "products": [
      {
        "productId": "1",
        "name": "Big Kenzie",
        "category": "Sanduíches",
        "price": 18,
        "image": "product01",
        "quantity": "1"
      },
      {
        "productId": "15",
        "name": "Suco Uva Maguary",
        "category": "Bebidas",
        "price": 7,
        "image": "product15",
        "quantity": "1"
      },
      {
        "productId": "22",
        "name": "Batata Frita Média",
        "category": "Acompanhamentos",
        "price": 8,
        "image": "product22",
        "quantity": "2"
      }
    ],
    "id": 1
  }
]
```

<h3 align ='center'> Criar novo Carrinho / Adicionar primeiro produto ao Carrinho</h3>

`POST /cart - FORMATO DA REQUISIÇÃO - STATUS 201`

```json
{
  "time": "2022-01-07 12:35:21",
  "userId": 1,
  "amount": 18,
  "products": [
    {
      "productId": "1",
      "name": "Big Kenzie",
      "category": "Sanduíches",
      "price": 18,
      "image": "product01",
      "quantity": "1"
    }
  ]
}
```

1. O campo - "userId" deve receber respectivamente o id do user que possui o carrinho;
2. O campo - "products" deve receber um array(lista) com os produtos inseridos pelo user em seu carrinho;
3. O campo - "productId" deve receber respectivamente o id do produto na lista de produtos;

```json
{
  "time": "2022-01-07 12:35:21",
  "userId": 1,
  "amount": 18,
  "products": [
    {
      "productId": "1",
      "name": "Big Kenzie",
      "category": "Sanduíches",
      "price": 18,
      "image": "product01",
      "quantity": "1"
    }
  ],
  "id": 1
}
```

<h3 align ='center'>Atualizar Carrinho / Atualizar quantidade de produto no Carrinho</h3>

`PATCH /cart/:id - FORMATO DA REQUISIÇÃO - STATUS 200`

1. A url da requisição deve receber o id do carrinho que deseja atualizar;
2. O corpo da requisição deve receber somente os dados a serem atualizados.

```json
{
  "amount": 41,
  "products": [
    {
      "productId": "1",
      "name": "Big Kenzie",
      "category": "Sanduíches",
      "price": 18,
      "image": "product01",
      "quantity": "1"
    },
    {
      "productId": "15",
      "name": "Suco Uva Maguary",
      "category": "Bebidas",
      "price": 7,
      "image": "product15",
      "quantity": "1"
    },
    {
      "productId": "22",
      "name": "Batata Frita Média",
      "category": "Acompanhamentos",
      "price": 8,
      "image": "product22",
      "quantity": "2"
    }
  ]
}
```

<h3 align ='center'> Deletar/Excluir Carrinho e todos os produtos no Carrinho</h3>

`DELETE /cart/:id - FORMATO DA REQUISIÇÃO - STATUS 200`

1. A url da requisição deve receber o id do hábito que deseja excluir;
2. Não é necessário nenhuma informação no corpo da requisição.

```json
{}
```

---

Produced by brunobgr
