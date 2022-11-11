let middleware = (req, res, next) =>{
    //console.log("uri", req.path)
    let ruta = req.path.split("/").pop()
    let style = ruta.length > 0 ? ruta : "home"
    res.locals.style =style
     return next()
}

module.exports = middleware