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
        model.generate(req.body)
        
        return res.redirect('/login')

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
        .then(()=>res.redirect("/users/profile"))
    },
    logout:(req, res)=>{
        delete req.session.user
        res.cookie("email", null,{maxAge: -1})
        return res.redirect("/")
    }
}
