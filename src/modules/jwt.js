const {sign, verify} = require("jsonwebtoken");
const { SECRET_WORD } = require("../../config");

module.exports.create_token = function (data){
    return sign(data, SECRET_WORD)
}
module.exports.check_token = function (token){
    try {
        verify(token, SECRET_WORD)
        return true
    } catch (error) {
        return false
    }
}