const router = require('express').Router();

const productsCtrl = require('../controllers/productsCtrl');

router.post('/', productsCtrl.addOneProduct);
router.get('/', productsCtrl.getProductsList);
router.put('/:id', productsCtrl.updateProduct);
router.delete('/:id', productsCtrl.deleteProd);

module.exports = router;
