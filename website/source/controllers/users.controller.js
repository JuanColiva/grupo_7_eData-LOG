const{validationResult} = require("express-validator");
const model = require("../models/users.model")
const db = require('../database/models');
module.exports = {
    login: (req, res) => {
        res.render( "users/login")
    },
    registro: (req, res) => {
        res.render("users/registro");
    },
    profile: (req, res) => {
            db.Usuario.findByPk(req.params.id)
            .then(resultado => {
                res.render("users/profile", {resultado})
            })
          },
    save: (req,res) => {
        const result = validationResult(req)
        if(!result.isEmpty()){
            let errores = result.mapped();
            return res.render("users/registro", {
                style: "register",
                errores: errores,
                data: req.body
            })
        }
        req.body.imagene = req.files && req.files.length > 0 ? req.files[0].filename : "default.jpg"
        model.generate(req.body)
        
        return res.redirect('/users/login')

    },
    access: (req, res) =>{
        const result = validationResult(req);
        if(!result.isEmpty()){
            let errores = result.mapped();
            return res.render("users/login", {
                style: "login",
                errores: errores,
                data: req.body
            })
        }
        if(req.body.rememberMe){
            res.cookie("email", req.body.email,{maxAge: 5000})
        }
        db.Usuario.findOne({
            where:{
                email: req.body.email
            }
        })
        .then(()=>res.redirect("/users/profile/"+ req.params.id))
    },
    edit: (req,res)=>{
        db.Usuario.findByPk(req.params.id)
        .then(usuario => {
            res.render("users/modificar", {usuario})
        })
    },
    update: (req,res)=>{
        const result = validationResult(req);
        if(!result.isEmpty()){
            let errores = result.mapped();
            return res.render("users/modificar", {
                style: "edit",
                errores: errores,
                data: req.body
        })
    }
    let data = {}
    data.nombre = req.body.nombre,
    data.apellido = req.body.apellido,
    data.email = req.body.email,
    req.files && req.files.length > 0 ? data.imagene = req.files[0].filename : null
    db.Usuario.findByPk(req.params.id)
    .then(user =>user.update(data))
            .then(()=>res.redirect("/users/profile/"+ req.params.id))
            .catch(error => console.log(error))
        return res.redirect ("/users/profile/"+ req.params.id)
    },
    destroy: (req,res)=>{
        db.Usuario.destroy({
            where:{id:req.params.id}
        }
        );
        res.redirect('/')
        
    },
    logout:(req, res)=>{
        delete req.session.user
        res.cookie("email", null,{maxAge: -1})
        return res.redirect("/")
    },
}