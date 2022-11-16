const db = require("../../database/models");
const op = db.sequelize.Op

module.exports = {
    list: (req,res) => {
        db.Producto.findAll().then(products =>{
            return res.status(200).json({
                meta:{
                    status: 200,
                    total: products.length,
                    url: req.url
                },
                 data: products
            })
        })
    },
    detail: (req,res)=>{
        db.Producto.findByPk(req.params.id).then(products =>{
            return res.status(200).json({
                meta:{
                    status: 200,
                },
                data: {
                    name: products.name,
                    plan: products.plan,
                    descripcion: products.descripcion,
                    imagen: "http://localhost:3001/products/"+ products.imagene
                }
            })
        })
    }
}