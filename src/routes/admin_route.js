const admin_middleware = require("../middlewares/admin_middleware");
const db = require("../modules/psql");

const router = require("express").Router();

router.get("/", admin_middleware, async (req, res) => {
    res.render("admin")
    let q = await db.query(`
    select * from news where id=1;
    `)
    // console.log(q.rows[0].posted_at.getDate(), typeof(q.rows[0].posted_at))
})

module.exports = {
    endpoint: "/admin",
    router
}