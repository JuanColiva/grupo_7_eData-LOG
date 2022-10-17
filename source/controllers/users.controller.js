const {join} = require ("path");
const{validationResult} = require("express-validator");
const model = require("../models/users.model")
const db = require('../database/models');
const sequelize = db.sequelize;
module.exports = {
    profile: (req, res) => {
        res.render("users/profile");
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
        res.cookie("/users", req.body.email,{maxAge: 5000})
        db.Usuario.findOne({
            where:{
                email: req.body.email
            }
        })
        .then(res.redirect("/users/profile"))
        if(req.body.rememberMe){
            res.cookie("userEmail", req.body.email, {maxAge: (1000 *60) * 2})
        }
        return res.redirect("/users/profile")
    },
    logout:(req, res)=>{
        delete req.session.user
        res.cookie("/users", null,{maxAge: -1})
        return res.redirect("/")
    }
}
