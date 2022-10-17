const {index} = require("../models/users.model")
const db = require('../database/models');
const sequelize = db.sequelize;

let middleware = (req, res,next)=>{
    let user = null
    if(req.cookies && req.cookies.user){
        let users = db.Usuario
        users.findOne({
            where:{
                email: req.body.email
            }
        }).then(resultado => {
            req.session.user = resultado
        })
    if(req.session && req.session.user){
        console.log(req.session)
        user = req.session.user
        user.admin = req.session.user.email.includes('@data.com')
    }
    res.locals.user = user
    return next()
}
}
module.exports = middleware