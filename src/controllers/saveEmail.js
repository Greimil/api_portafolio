const Email = require("../models/email")

const saveEmail = async (name,email) => {

    try {
        console.log("estoy entrando en el controller de save email");
        const emailSaved = new Email({
            name,
            email            
        })
        
        await emailSaved.save()

    } catch (error) {
        console.log("ha ocurrido un error al intentar guardar el correo");
    }



}

module.exports = {saveEmail}