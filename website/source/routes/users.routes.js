const {Router} = require('express');
const router = Router();
const {profile,save, access, logout,registro,login,edit,update,destroy}=require('../controllers/users.controller');
const validator = require("../validations/register");
const validatorLogin = require("../validations/login");
const{resolve, extname} = require ("path")
const {existsSync, mkdirSync} = require("fs")
isLoged = require("../middlewares/isLoged")

const destination = function(req, file, cb){
    let folder = resolve (__dirname,"..", "..", "public", "avatars")
    if(!existsSync(folder)){
        mkdirSync(folder)
    }
    return cb (null, folder)

}

const filename = function(req, file, cb){

 let name =  file.fieldname + "-" + Date.now() + extname(file.originalname);


    return cb (null, name)
}
const multer = require("multer");
const upload = multer({storage: multer.diskStorage({destination, filename})})

router.get("/registro", registro);
router.get("/login", login); 
router.get('/profile/:id',isLoged,profile)
router.get('/logout', logout)
router.post('/save', upload.any(), validator, save)
router.get("/modificar/:id",isLoged,edit)
router.put("/update/:id",upload.any(),isLoged,update)
router.post("/access",validatorLogin, access)
router.delete("/delete/:id",destroy)
module.exports = router