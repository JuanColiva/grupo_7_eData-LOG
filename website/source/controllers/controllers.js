const {generate} = require("../models/products.models");
const {unlinkSync} = require ("fs");
const {resolve} = require ("path");
const db = require('../database/models');
const sequelize = db.sequelize;
const{validationResult} = require("express-validator");

const controller = {
    home: (req, res) => {
        res.render("users/home")
    },
    contacto: (req, res) => {
        res.render("users/contacto")
    },
    
    detalle: (req, res) => {
        res.render("products/detalles")
    },
    precios: (req, res) => {
        res.render("products/precios");
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
        res.render("products/create");
      },
    save: (req, res) =>{
        const result = validationResult(req);
        if(!result.isEmpty()){
            let errores = result.mapped();
            return res.render("products/create", {
                style: "create",
                errores: errores,
                data: req.body
        })
    }
        req.body.imagene = req.files && req.files.length > 0 ? req.files[0].filename : "default.jpg"
        let nuevo = generate (req.body);
        return res.redirect ("/productos")
      },
    edit: (req, res) =>{
        db.Producto.findByPk(req.params.producto)
        .then(producto => {
            res.render("products/edit", {producto})
        })
      },
    update: (req,res)=>{
        const result = validationResult(req);
        if(!result.isEmpty()){
            let errores = result.mapped();
            return res.render("products/edit", {
                style: "edit",
                errores: errores,
                data: req.body
        })
    }
        let data = {}
        data.name= req.body.name
            data.descripcion = req.body.descripcion
            data.plan = req.body.plan
            req.files && req.files.length > 0 ? data.imagene = req.files[0].filename : null
            db.Producto.findByPk(req.body.id)
            .then(producto =>producto.update(data))
            .then(()=>res.redirect("/productos"))
            .catch(error => console.log(error))
        return res.redirect ("/productos")
    },
      remove: (req,res)=>{
        let data = {}
            data.name= req.body.name
            data.descripcion = req.body.descripcion
            data.plan = req.body.plan
            req.files && req.files.length > 0 ? data.imagene = req.files[0].filename : null
            db.Producto.findByPk(req.body.id)
            .then(producto =>producto.destroy(data))
            .then(()=>res.redirect("/productos"))
            .catch(error => console.log(error))
        return res.redirect ("/productos")
      },
}
module.exports = controller;