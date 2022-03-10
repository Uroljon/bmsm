const { check_token } = require("../modules/jwt");

module.exports = async function(req, res, next){
    let token = req.cookies.token;
    let is_admin = check_token(token)
    if(is_admin){
        next()
    }else{
        res.redirect("/login")
    }
}