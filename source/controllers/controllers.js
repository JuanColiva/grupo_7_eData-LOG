const {generate, write} = require("../models/products.models");
const {unlinkSync} = require ("fs");
const {join, resolve} = require ("path");
const db = require('../database/models');
const sequelize = db.sequelize;

const controller = {
    home: (req, res) => {
        res.render("users/home")
    },
    contacto: (req, res) => {
        res.render("users/contacto")
    },
    login: (req, res) => {
        res.render( "users/login")
    },
    
    detalle: (req, res) => {
        res.render("products/detalles")
    },
    precios: (req, res) => {
        res.render("products/precios");
    },
    registro: (req, res) => {
        res.render("users/registro");
    },
    index: (req, res) => {
        db.Producto.findAll()
            .then(productos => {
                res.render('products/productos', {productos})
            })
    },
    show: (req, res) => {
        db.Producto.findByPk(req.params.producto)
            .then(producto => {
                return res.render('products/detalles.ejs', {producto});
            });
    },
    create: (req, res) =>{      
        res.render("users/create");
      },
    save: (req, res) =>{
        req.body.imagene = req.files && req.files.length > 0 ? req.files[0].filename : "default.jpg"
        let nuevo = generate (req.body);
        return res.redirect ("/productos")
      },
    edit: (req, res) =>{
        db.Producto.findByPk(req.params.producto)
        .then(producto => {
            res.render("users/edit", {producto})
        })
      },
    update: (req,res)=>{
        let data = {}
            
        data.name= req.body.name
        data.descripcion = req.body.descripcion
        data.plan = req.body.plan
        if(req.file){
            data.imagene = req.file.imagene
        }
        let selected = db.Producto.findByPk(req.body.Producto)
        let upload= selected.update(data)
        return selected.then(selected => !selected ? res.send("no se enncontro el producto"):upload)
        .then(()=>res.redirect("/productos"))
        },
      remove: (req,res)=>{
            db.Producto.destroy({
            name: req.body.name,
            descripcion: req.body.descripcion,
            plan: req.body.plan,
            imagene: req.body.imagene
        },{
            where:{
                id_producto: req.body.id_producto
            }
        });
        if(req.body.imagene != "default.jpg"){
            let file = resolve(__dirname, "..", "..", "public", "products", req.body.imagene)
            unlinkSync(file)
        }
        return res.redirect ("/productos")
      }
}
module.exports = controller;