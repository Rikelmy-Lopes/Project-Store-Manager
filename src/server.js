const app = require('./app');
require('dotenv').config();

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(3006, () => {
  console.log(`Escutando na porta ${3006}`);
});
