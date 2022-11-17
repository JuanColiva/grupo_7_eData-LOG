const {Router} = require('express');
const router = Router();
const {profile,save, access, logout,registro,login}=require('../controllers/users.controller');
const multer = require('multer');
const storage = require('../modules/storage');
const upload = multer({storage:storage('../../public/products')});
const validator = require("../validations/register");
const validatorLogin = require("../validations/login");

router.get("/registro", registro);
router.get("/login", login); 
router.get('/profile', profile)
router.get('/logout', logout)
router.post('/save', upload.any(), validator, save)
router.post("/access",validatorLogin, access)

module.exports = router