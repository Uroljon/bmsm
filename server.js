const express = require("express");
const app = express();
const cors = require("cors");

const { PORT } = require("./config");

app.use(express.static("./src/public/"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.set("view engine", "ejs")
app.set("views", "./src/views/")



app.listen(PORT, ()=>console.log(`server started at http://localhost:${PORT}`))