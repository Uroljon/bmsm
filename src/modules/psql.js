const Pool = require("pg-pool")
const { DB_PASS, DB_PORT, DB_NAME } = require("../../config")

const db = new Pool({
    connectionString: `postgres://postgres:${DB_PASS}@localhost:${DB_PORT}/${DB_NAME}`
})

module.exports = db;