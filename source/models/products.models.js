const {resolve} = require("path");
const fs = require("fs");
const db = require('../database/models');
const sequelize = db.sequelize;

let model = {
    generate: data => {
        const save = db.Producto.create({
        name: data.name,
        descripcion: data.descripcion,
        plan: data.plan,
        imagene: data.imagene
    })
        const success = data => console.log(data)
        const error = error => console.log(error)
    
        return save.then(success).catch(error)
    },
    actualizar: data => {
        data.name= req.body.name
        data.descripcion = req.body.descripcion
        data.plan = req.body.plan
        req.files && req.files.length > 0 ? data.imagene = req.files[0].filename : null    
        db.Producto.findByPk(req.body.id_producto)
        .then(producto =>producto.update(data))
        .then(()=>res.redirect("/productos"))
        .catch(error => res.send(error))
    }
}

module.exports = model;