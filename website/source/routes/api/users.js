const {Router} = require('express');
const router = Router();
const controller =require('../../controllers/api/users');

router.get("/users",controller.list)
router.get("/users/last",controller.last)
router.get("/users/:id",controller.detail)

module.exports = router