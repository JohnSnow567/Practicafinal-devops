const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hola Mundo desde DevOps CI/CD!'));

module.exports = app;

// Si se ejecuta directamente (node src/index.js), entonces escuchamos:
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server listening on ${port}`));
}
