const {index,write} = require('../models/users.model');
const {join} = require ("path");
const{validationResult} = require("express-validator");
module.exports = {
    login: (req, res) => {
        let file = join(__dirname, "../views/users/login")
        res.render(file);
    },
    register: (req, res) => {
        let file = join(__dirname, "../views/users/registro")
        res.render(file);
    },
    profile: (req,res) => res.render('profile',{
    }),
    save: (req,res) => {
        const result = validationResult(req);
        if(!result.isEmpty()){
            let errores = result.mapped();
            return res.render("../views/users/registro", {
                style: "register",
                errores: errores,
                data: req.body
            })

        }

        let all = index();
        req.body.avatar = req.files && req.files[0] ? req.files[0].filename : null
        req.body.id = all.length > 0 ? all.pop().id + 1 : 1
        let user = {...req.body};
        all.push(user)
        write(all)
        return res.redirect('/users/login')
    },
}
