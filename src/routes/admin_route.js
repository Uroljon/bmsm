const admin_middleware = require("../middlewares/admin_middleware");
const router = require("express").Router();

router.get("/", admin_middleware, async (req, res) => {
    res.render("admin")
})

module.exports = {
    endpoint: "/admin",
    router
}