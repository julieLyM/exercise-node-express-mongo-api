const express = require('express');

const middlewares = require('./middlewares');
const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`j'ecoute le port ${PORT}`));
