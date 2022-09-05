const express = require("express");
const mongoose = require("mongoose")
const path = require("path")
const cors = require("cors");
const bodyParser = require('body-parser')
require("dotenv").config()
const PORT = process.env.PORT || 5000



const app = express()
mongoose.connect(process.env.URI).then(()=> console.log("BBDD conectada 🔥")).catch((err) => console.error("ocurrio un error 😭"))


// middlewares necesarios
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))




app.use("/api", require("./routes/apiIndex"))
// app.use("/api", require("./routes/nodemailer"))

app.use("/api", require("./routes/nodemailer"))



app.listen(PORT, ()=> console.log(`Servidor corriendo en el puerti ${PORT} 🔥`))