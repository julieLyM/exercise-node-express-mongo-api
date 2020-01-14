const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const auth = require('../auth.js');
const url = 'mongodb://localhost:27017';

const PAGE = 2;

const initializeDatabase = async () => {
  const client = await MongoClient.connect(url, {
    auth,
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = client.db('julieShop');
};

const listProduct = async (page, sort, order) => {
  const products = await db
    .collection('products')
    .find()
    .sort({ [sort]: Number(order) })
    .skip(PAGE * Number(page))
    .limit(PAGE)
    .toArray();
  return products;
};

const addProduct = product => {
  return db.collection('products').insertOne(product);
};

const updateProduct = (id, updatedProduct) => {
  return db
    .collection('products')
    .updateOne({ _id: ObjectId(id) }, { $set: updatedProduct });
};

const deleteProduct = id => {
  return db.collection('products').deleteOne({ _id: ObjectId(id) });
};

async function initialize() {
  await initializeDatabase();
}

initialize();

module.exports = { listProduct, addProduct, updateProduct, deleteProduct };
