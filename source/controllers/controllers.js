const e = require("express");
const {join} = require("path");
const {all, one, generate, write} = require("../models/products.models");
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
        let file = join(__dirname, "../views/products/detalles")
        res.render(file);
    },
    precios: (req, res) => {
        let file = join(__dirname, "../views/products/precios")
        res.render(file);
    },
    registro: (req, res) => {
        let file = join(__dirname, "../views/users/registro")
        res.render(file);
    },
    index: (req, res) => {

        let products = all();

        if (req.params){
            return res.render("./products/productos.ejs", {products});
        }
        return res.render("./products/productos.ejs", {products});
    },
    show: (req, res) => {

        let product = one(req.params.producto);

        if(product){
        return res.render("detalles", {product})
    }
        return res.render("detalles", {product:null})

    },
    create: (req, res) =>{
        let file = join(__dirname, "../views/users/create.ejs");
        res.render(file);
      },
      save: (req, res) =>{
        let nuevo = generate (req.body);
        let todos = all();
        todos.push(nuevo)
        write(todos)
        return res.redirect ("/detalles")
      },
      edit: (req, res) =>{
        let product = one(req.params.producto)


        return res.render ("edit")
      },
      update:(req,res)=>{
        let todos = all();
        let actualizados = todos.map(elemento =>{
            if(elemento.id == req.body.id){
                elemento.name = req.body.name;
                elemento.plan = req.body.plan;
                elemento.descripcion = req.body.descripcion;
            }
            return elemento
        
        })
        write(actualizados)

        return res.redirect("/productos")
      }
}
module.exports = controller;