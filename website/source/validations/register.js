const { body } = require("express-validator");

let nombre = body("nombre").notEmpty().withMessage("Nombre no puede quedar vacio").bail().isLength({min:2}).withMessage("minimo 2 caracteres")
let apellido = body("apellido").notEmpty().withMessage("Apellido no puede quedar vacio").bail().isLength({min:2}).withMessage("minimo 2 caracteres")
let email = body("email").notEmpty().withMessage("Email no puede quedar vacio").bail().isEmail().withMessage("Email no valido");
let password = body("password").notEmpty().withMessage("Contraseña no valida").bail().isLength({min:6}).withMessage("Minimo 6 caracteres");

let validaciones = [nombre, apellido,email, password]

module.exports = validaciones
