const {body} = require("express-validator");
const {compareSync} = require("bcrypt")
const db = require('../database/models');
const sequelize = db.sequelize;

let email = body("email").notEmpty().withMessage("Email no puede quedar vacio").bail()
.isEmail().withMessage("Email no valido").custom((value,{req})=>{
    return db.Usuario.findOne({
        where:{
            email: value
        }
    }).then(resultado => {
        if(!resultado){
        return Promise.reject("usuario no encontrado")
    }
    return true
    })
    
})

let password = body("password").notEmpty().withMessage("contraseña no puede quedar vacia").bail()
.isLength({min:6}).withMessage("Minimo 6 caracteres").custom((value,{req})=>{
    return db.Usuario.findOne({
        where:{
            email: req.body.email
        }
    }).then(resultado => {
        if(!resultado){
            return Promise.reject("credenciales invalidas")
        }
        if (!compareSync(value, resultado.password)){
            return Promise.reject("contraseña incorrecta")
        }
        return true
    })
})

let validaciones = [email, password]

module.exports = validaciones