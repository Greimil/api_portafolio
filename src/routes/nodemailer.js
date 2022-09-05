const express = require("express")
const router = express.Router()
const sendEmail = require("../middlewares/sendEmail")


// index page
router.post("/sendemail", sendEmail)




module.exports = router