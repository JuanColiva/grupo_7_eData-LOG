const {join} = require("path");
const controller = {
    home: (req, res) => {
        let file = join(__dirname, "../views/users/home")
        res.render(file)
    },
    contacto: (req, res) => {
        let file = join(__dirname, "../views/users/contacto")
        res.render(file);
    },
    login: (req, res) => {
        let file = join(__dirname, "../views/users/login")
        res.render(file);
    },
    carrito: (req, res) => {
        let file = join(__dirname, "../views/products/carrito")
        res.render(file);
    },
    detalle: (req, res) => {
        let file = join(__dirname, "../views/products/detalle")
        res.render(file);
    },
    precios: (req, res) => {
        let file = join(__dirname, "../views/products/precios")
        res.render(file);
    },
    registro: (req, res) => {
        let file = join(__dirname, "../views/users/registro")
        res.render(file);
    }
}
module.exports = controller;