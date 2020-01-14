const prodsRouter = require('./routes/productsRouter');

const routes = app => {
  app.use('/api/v1/products/', prodsRouter);
};

module.exports = routes;
