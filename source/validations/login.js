const { body } = require("express-validator");
const {index} = require("../models/users.model")
const {compareSync} = require("bcrypt")
const db = require('../database/models');
const sequelize = db.sequelize;
let email = body("email").notEmpty().withMessage("Email no puede quedar vacio").bail()
.isEmail().withMessage("Email no valido").custom((value,{req})=>{
    let users = db.Usuario
    users.findOne({
        where:{
            email: req.body.email
        }
    }).then(resultado => {
        req.session.user = resultado
    })
    let listaOfEmails = users.findByPk(re.body.id_usuario)
    if(!listaOfEmails){
        throw new Error("usuario no encontrado")
    }
    return true
})

let password = body("password").notEmpty().withMessage("contraseña no puede quedar vacia").bail()
.isLength({min:6}).withMessage("Minimo 6 caracteres").custom((value,{req})=>{
    let users = db.Usuario
    let result = users.findByPk(re.body.id_usuario)
    users.findOne({
        where:{
            email: req.body.email
        }
    }).then(resultado => {
        req.session.user = resultado
    })
    if(!result){
        throw new Error("credenciales invalidas")
    }
    if (!compareSync(value, result.password)){
        throw new Error("contraseña incorrecta")
    }
    return true
})

let validaciones = [email, password]

module.exports = validaciones
