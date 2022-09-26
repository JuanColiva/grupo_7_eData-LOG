const {index} = require("../models/users.model")

let middleware = (req, res,next)=>{
    let user = null
    if(req.cookies && req.cookies.user){
        let users = index()
        let result = users.find((user) => {
            return user.email == req.cookies.user;
        })
        req.session.user = result
    }
    if(req.session && req.session.user){
        user = req.session.user
        user.admin = req.session.user.email.includes('@data.com')
    }
    res.locals.user = user
    return next()
}
module.exports = middleware