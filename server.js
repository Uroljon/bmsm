const { PORT } = require("./config");
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path")
const fs = require("fs")
const cookie_parser = require("cookie-parser")

app.use(express.static(path.join(__dirname, "src", "public")))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(cookie_parser())

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "src", "views"))
fs.readdir(path.join(__dirname, "src", "routes"), (err, files)=>{
    if(err) throw new Error(err)
    files.forEach(file=>{
        const {endpoint, router} = require(path.join(__dirname, "src", "routes", file))
        if(endpoint && router){
            app.use(endpoint, router)
        }
    })
})

app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}`))