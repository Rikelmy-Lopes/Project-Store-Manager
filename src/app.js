const express = require('express');
require('express-async-errors');
const routerProducts = require('./routers/products.router');
const routerSales = require('./routers/sales.router');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/', routerProducts);
app.use('/', routerSales);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;