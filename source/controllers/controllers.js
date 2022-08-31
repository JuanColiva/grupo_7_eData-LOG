const {all, one, generate, write} = require("../models/products.models");
const {unlinkSync} = require ("fs");
const {join, resolve} = require ("path");
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
        return res.render("./products/detalles", {product})
    }
        return res.render("./products/detalles", {product:null})

    },
    create: (req, res) =>{      
        let file = join(__dirname, "../views/users/create.ejs");
        res.render(file);
      },
    save: (req, res) =>{
        req.body.imagen = req.files && req.files.length > 0 ? req.files[0].filename : "default.jpg"
        let nuevo = generate (req.body);
        let todos = all();
        todos.push(nuevo)
        write(todos)
        return res.redirect ("/productos")
      },
      edit: (req, res) =>{
        let product = one(req.params.producto)
        return res.render ("../views/users/edit.ejs",{
            product
        })
      },
      update:(req,res)=>{
        let todos = all();
        let actualizados = todos.map(elemento =>{
            if(elemento.id == req.body.id){
                elemento.name = req.body.name;
                elemento.plan = req.body.plan;
                elemento.descripcion = req.body.descripcion;
                elemento.imagen = req.files && req.files.length > 0 ? req.files[0].filename : elemento.imagen
            }
            return elemento
        
        })
        write(actualizados)

        return res.redirect("/productos")
      },
      remove: (req,res)=>{
        let product = one(req.body.id);
        if(product.imagen != "/products/default.jpg"){
            let file = resolve(__dirname, "..", "..", "public", "products", product.imagen)
            unlinkSync(file)
        }
        let todos = all();
        let noEliminados = todos.filter(elemento => elemento.id != req.body.id)
        write(noEliminados)
        return res.redirect("/productos")

      }
}
module.exports = controller;