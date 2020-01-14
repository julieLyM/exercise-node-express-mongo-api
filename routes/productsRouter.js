const router = require('express').Router();

const productsCtrl = require('../controllers/productsCtrl');

router.get('/', productsCtrl.getProductsList);
router.post('/', productsCtrl.addOneProduct);
router.put('/:id', productsCtrl.updateProduct);
router.delete('/:id', productsCtrl.deleteProd);

module.exports = router;
