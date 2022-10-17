const {generate,actualizar} = require("../models/products.models");
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
        actualizar(req.body)
    },
      remove: (req,res)=>{
        let data = {}
            data.name= req.body.name
            data.descripcion = req.body.descripcion
            data.plan = req.body.plan
            req.files && req.files.length > 0 ? data.imagene = req.files[0].filename : null
            db.Producto.findByPk(req.body.id_producto)
            .then(producto =>producto.destroy(data))
            .then(()=>res.redirect("/productos"))
            .catch(error => console.log(error))
        return res.redirect ("/productos")
      }
}
module.exports = controller;