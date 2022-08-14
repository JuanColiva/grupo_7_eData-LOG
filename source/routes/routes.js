const {Router} = require("express")
const route = Router();
const {home, contacto, login, carrito, detalle, precios, registro, create} = require("../controllers/controllers")

route.get("/", home)

route.get("/contacto", contacto);

route.get("/login", login); 

route.get("/carrito", carrito);

route.get("/detalle", detalle);

route.get("/precios", precios);

route.get("/registro", registro);

route.get('/productos/nuevo', create);
module.exports = route;