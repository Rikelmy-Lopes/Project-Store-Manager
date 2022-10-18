
# Project Store Manager

API Rest para gerenciamento de Vendas usando o Banco de Dados SQL!


## Rode Localmente


### ⚠️Variaveis de Ambiente⚠️

Para rodar esse Projeto, você vai precisar adicionar as seguintes variaveis de ambiente no seu arquivo .env:

`MYSQL_HOST`

`MYSQL_USER`

`MYSQL_PASSWORD`

`MYSQL_DATABASE`

`MYSQL_PORT`

`PORT`

`HOST`

Clone o Projeto

```bash
  git clone git@github.com:Rikelmy-Lopes/Project-Store-Manager.git
```

Vá para o diretorio do Projeto

```bash
  cd Project-Storage-Manager
```

Instale as Dependencias

```bash
  npm install
```

### Banco de Dados

Execute as seguintes Querys SQL presentes nos arquivos:

```
migration.sql

seed.sql
```

Inicie o Server

```bash
  npm start
```

Para desenvolvimento
```bash
  npm run debug
```

## Documentação

<details>
  <summary><strong> API Reference </strong></summary>
  
  
## API Reference



#### Busca todos os Produtos

```http
  GET /products
```

#### Busca produto por Id

```http
  GET /products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Obrigatorio**. Id do Produto |


#### Busca produto por Nome

```http
  GET /products/search?q
```

| Query | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `q`      | `string` | **Obrigatorio**. Nome do Produto |


#### Adiciona um novo Produto

```http
  POST /products
```

| Body | Type     | Description                       | Chaves do Objeto |
| :-------- | :------- | :-------------------------------- | :----------------
| `{}`      | `objeto` | **Obrigatorio** | name: **Obrigatorio** |
  
#### Atualiza um produto

```http
  PUT /products/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `number` | **Obrigatorio**. Id do Produto |

| Body | Type     | Description                | Chave do objeto |
| :-------- | :------- | :------------------------- |:----------
| `{}` | `objeto` | **Obrigatorio** | name: **Obrigatorio** |

#### Deleta um produto

```http
  DELETE /products/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `number` | **Obrigatorio**. Id do Produto |
  
</details>

## Rode os Testes

Para rodar os Testes

```bash
  npm test
```

