const express = require('express');
const routes = require('./src/routes/index.route');
const { logger, errorHandler } = require('./src/middlewares/main.middleware');

const app = express();
app.use(express.json());
app.use(logger);

app.use(routes);

app.use(errorHandler);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`[SERVIDOR] Clinica operando em http://localhost:${PORT}`);
});
