const admin_middleware = require("../middlewares/admin_middleware");
const db = require("../modules/psql");
const fs = require("fs/promises")
const path = require("path")
const router = require("express").Router();

router.post("/create", admin_middleware, async (req, res) => {
    // res.render("admin")
    let name = null;
    if (req.files) {
        let id = await db.query(`select * from news;`);
        id = id.rows.length + 1;
        let img = req.files.cover_img;
        name = `news_${id}.${img.mimetype.split("/")[1]}`
        img.mv(path.join(__dirname, "..", "public", "images", name))
    }
    const { news_title, news_body } = req.body;

    let request = await db.query(`insert into news (title, body, cover_image) values ($1, $2, $3) returning *;` , [news_title, news_body, name])

    res.status(201).json({
        ok: true,
        data: request.rows
    })

})
router.get("/get_all", async (req, res) => {
    let q = await db.query(`
        select * from news;
    `);
    res.json({
        ok: true,
        news: q.rows
    })
})

module.exports = {
    endpoint: "/news",
    router
}