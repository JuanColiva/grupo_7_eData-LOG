const {Router} = require("express")
const route = Router();
const controller = require("../controllers/controllers")

route.get("/", controller.home)

route.get("/contacto", controller.contacto);

route.get("/login", controller.login); 

route.get("/carrito", controller.carrito);

route.get("/precios", controller.precios);

route.get("/registro", controller.registro);

route.get("/productos", controller.index);

route.get("/productos/nuevo", controller.create);

route.post("/productos/guardar", controller.save);

route.get("/productos/editar/:producto", controller.edit);

route.put("/productos/actualizar", controller.update)

route.get("/productos", controller.index);

route.get("/productos/:producto", controller.show);
module.exports = route;