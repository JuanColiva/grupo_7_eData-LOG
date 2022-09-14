const {Router} = require('express');
const router = Router();
const { login,register,profile,save, access, logout}=require('../controllers/users.controller');
const multer = require('multer');
const storage = require('../modules/storage');
const upload = multer({storage:storage('../../public/products')});
const validator = require("../validations/register");
const validatorLogin = require("../validations/login");

router.get('/login', login)
router.get('/register', register)
router.get('/profile', profile)
router.get('/logout', logout)

router.post('/save', upload.any(), validator, save)
router.post("/access",validatorLogin, access)

module.exports = router