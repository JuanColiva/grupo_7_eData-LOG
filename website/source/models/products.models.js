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
    }
}

module.exports = model;