const {Router} = require("express")
const route = Router();
const controller = require("../controllers/controllers")
const isAdmin = require("../middlewares/administrador")
const isLoged = require("../middlewares/isLoged")
const{resolve, extname} = require ("path")
const {existsSync, mkdirSync} = require("fs")
const validaciones = require("../validations/crearP")
const validacionEdit = require("../validations/actualizarP")

const destination = function(req, file, cb){
    let folder = resolve (__dirname,"..", "..", "public", "products")
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

route.get("/", controller.home)

route.get("/contacto", controller.contacto);

route.get("/precios", controller.precios);

route.get("/productos", controller.index);

route.get("/productos/nuevo",isLoged,isAdmin, controller.create);

route.post("/productos/guardar", upload.any(),validaciones, controller.save);


route.get("/productos/:producto", controller.show);

route.get("/productos/editar/:producto",isLoged,isAdmin, controller.edit);

route.put("/productos/actualizar" , upload.any(),validacionEdit, controller.update)


route.delete("/productos/borrar", controller.remove)
module.exports = route;