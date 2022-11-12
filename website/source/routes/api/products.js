const {Router} = require('express');
const router = Router();
const controller = require('../../controllers/api/productsControllers');

router.get("/products",controller.list)
router.get("/products/:id",controller.detail)

module.exports = router