const transporter = require("../controllers/nodemailer")

const sendEmail = async (req, res) => {  

  try {
    
    const {name, email, msg} = req.body

    console.log(name, email, msg);

    await transporter.sendMail({
        priority: "high",
        from: `"Nuevo mensaje desde tu app" < ${email}> `, // sender address
        to: "greimilnunez@gmail.com", // list of receivers
        subject: `${name} quiere ponerse en contacto contigo `, // Subject line
        text: `${msg}`, // plain text body
        
    });

    
    res.status(200).json({mensaje: "Correo enviado a Grey"})


  } catch (error) {
    
    res.status(400).json({mensaje: "Algo salio mal 😭"})
  }



}

module.exports = sendEmail