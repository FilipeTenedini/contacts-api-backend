const express = require('express');
// instanciando o express
const app = express();

// criando uma rota
app.get('/', (request, response) => {
  response.send('Hello World');
});

// subindo o express em uma porta

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Server started at http://localhost:3000'));
