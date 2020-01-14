const prodsStore = require('../store/productsStore');

const addOneProduct = async (req, res) => {
  const { body: product } = req;
  await prodsStore.addProduct(product);
  res.sendStatus(201);
};

const getProductsList = async (req, res) => {
  const {
    query: { page, sort, order },
  } = req;
  const data = await prodsStore.listProduct(page, sort, order);
  res.send(data);
};

const updateProduct = async (req, res) => {
  const {
    body: product,
    params: { id },
  } = req;
  const updateProd = await prodsStore.updateProduct(id, product);
  res.sendStatus(200);
};

const deleteProd = async (req, res) => {
  const {
    params: { id },
  } = req;
  const deleteProd = await prodsStore.deleteProduct(id);
  res.sendStatus(204);
};

module.exports = { getProductsList, addOneProduct, updateProduct, deleteProd };
