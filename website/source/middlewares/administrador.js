const isAdmin = (req,res,next) => {
    let admin = req.session.user.email.includes('@data.com')
    if(admin){
      return next()
    } else{
      return res.redirect('/')
    }
  }
 module.exports = isAdmin;