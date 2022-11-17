const fs = require('fs');
const {resolve} = require('path');
const index = () => JSON.parse(fs.readFileSync(resolve(__dirname,'..','data','users.json')))
const one = id => index().find(e => e.id == id)
const write = data => fs.writeFileSync(resolve(__dirname,'..','data','users.json'),JSON.stringify(data,null,2))
module.exports = {index,one,write}
const db = require('../database/models');
const {hashSync} = require("bcrypt");


let model ={
    generate: data => {
    const save = db.Usuario.create({
    nombre: data.nombre,
    apellido: data.apellido,
    password: hashSync(data.password,8),
    email: data.email,
    imagene: data.imagene
})
    const success = data => console.log(data)
    const error = error => console.log(error)

    return save.then(success).catch(error)
},
index: () => JSON.parse(fs.readFileSync(resolve(__dirname,'..','data','users.json')))
}
module.exports = model