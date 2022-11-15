const { body } = require("express-validator");

let name = body("name").notEmpty().withMessage("Nombre no puede quedar vacio").bail().isLength({min:2})
let descripcion = body("descripcion").notEmpty().withMessage("La descripcion no puede quedar vacia").bail().isLength({min:5})

validaciones = [name,descripcion,]

module.exports = validaciones