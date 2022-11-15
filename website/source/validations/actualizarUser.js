const { body } = require("express-validator");

let nombre = body("nombre").notEmpty().withMessage("Nombre no puede quedar vacio").bail().isLength({min:2})
let apellido = body("apellido").notEmpty().withMessage("Apellido no puede quedar vacio").bail().isLength({min:2})
let email = body("email").notEmpty().withMessage("Email no puede quedar vacio").bail().isEmail().withMessage("Email no valido");

let validaciones = [nombre, apellido,email]

module.exports = validaciones