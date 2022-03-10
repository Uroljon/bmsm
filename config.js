require("dotenv").config()

const {env} = process;

module.exports = {
    PORT: env.PORT,
    DB_NAME: env.DB_NAME,
    DB_PASS: env.DB_PASS,
    DB_PORT: env.DB_PORT,
    SECRET_WORD: env.SECRET_WORD
}