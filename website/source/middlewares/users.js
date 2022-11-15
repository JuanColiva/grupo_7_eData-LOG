const db = require('../database/models');

let middleware = (req, res,next)=>{
        let users = db.Usuario
        users.findOne({
            where:{
                email:req.cookies && req.cookies.email ? req.cookies.email : ""
            }
        }).then(resultado => {
            let user = null
            if(resultado){
                req.session.user = resultado
            }
            if(req.session && req.session.user){
                user = req.session.user
                user.admin = req.session.user.email.includes('@data.com')
            }
            res.locals.user = user
            return next()
        })
    }
module.exports = middleware