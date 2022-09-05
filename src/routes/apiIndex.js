const express = require("express")
const router = express.Router()
const {readCount} = require("../controllers/counter")


// index page
router.get("/dataindex", readCount)




module.exports = router