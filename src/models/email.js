const  mongoose  = require("mongoose");


const EmailSchema = new mongoose.Schema({
    name: String,
    email: String,
})



const Email = mongoose.model("Email",EmailSchema)

module.exports = Email