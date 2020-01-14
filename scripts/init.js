const MongoClient = require('mongodb').MongoClient;
const auth = require('../auth.js');

const url = 'mongodb://localhost:27017';
const listProducts = [
  {
    name: 'lipstick',
    description: 'blablablabla',
    price: 10,
    category: 'make - up',
    image:
      'https://production-eu01-dior.demandware.net/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dwbe9d58bd/assets/Y0027830/Y0027830_F002783999_E01_ZHC.jpg',
  },
  {
    name: 'mascara',
    description: 'blablablabla',
    price: 15,
    category: 'make - up',
    image:
      'http://www.kostest.com/wp-content/uploads/2016/03/mascara-better-than-sex-too-faced-600x600.jpg',
  },
  {
    name: 'mascara',
    description: 'mascara111 blablablabla',
    price: 35,
    category: 'make - up',
    image:
      'http://www.kostest.com/wp-content/uploads/2016/03/mascara-better-than-sex-too-faced-600x600.jpg',
  },
  {
    name: 'eyeliner',
    description: 'blablablabla',
    price: 14,
    category: 'make - up',
    image:
      'https://www.origines-parfums.com/pub/media/catalog/product/cache/507bb523ae3450534055b51b29df7a7b/8/1/8143776165.jpg?v=20191024102329',
  },
];

let db = null;

const initializeDatabase = async () => {
  const client = await MongoClient.connect(url, {
    auth,
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = client.db('julieShop');
};

const addProduct = async products => {
  try {
    const { result } = await db.collection('products').insertMany(products);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

const deleteCollection = async () => {
  try {
    const { result } = await db.collection('products').drop();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

async function initialize() {
  await initializeDatabase();
  await deleteCollection();
  addProduct(listProducts);
}

initialize();

module.exports = { listProducts };
