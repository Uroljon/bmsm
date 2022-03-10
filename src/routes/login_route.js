const { cookie } = require("express/lib/response");
const { create_token } = require("../modules/jwt");
const db = require("../modules/psql");
const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("login")
})
router.post("/", async (req, res) => {
    const { email, password } = req.body;
    let user = await db.query(`select * from users where email=$1`, [email]);
    user = user.rows[0]
    if (!user) {
        res.render("login", {
            error: "email",
        })
    } else {
        if (user.password === password) {
            let token = create_token({...user, password: null})
            res.cookie("token", token);
            res.redirect("/admin")
        } else {
            res.render("login", {
                error: "password",
            })
        }
    }
})

module.exports = {
    endpoint: "/login",
    router
}