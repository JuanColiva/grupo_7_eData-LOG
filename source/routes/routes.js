const {Router} = require("express")
const route = Router();
const {join} = require("path");

route.get("/", (req, res) => {
    let file = join(__dirname, "../views/home.html")
    res.sendFile(file)})

route.get("/contacto", (req, res) => {
    let file = join(__dirname, "../views/contacto.html")
    res.sendFile(file);
});

route.get("/login", (req, res) => {
    let file = join(__dirname, "../views/login.html")
    res.sendFile(file);
}); 

route.get("/carrito", (req, res) => {
    let file = join(__dirname, "../views/carrito.html")
    res.sendFile(file);
});

route.get("/detalle", (req, res) => {
    let file = join(__dirname, "../views/detalle.html")
    res.sendFile(file);
});

route.get("/precios", (req, res) => {
    let file = join(__dirname, "../views/precios.html")
    res.sendFile(file);
});

module.exports = route;