import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    //need smtp details to send email.

    // host:'smtp-relay.brevo.com', 
    // port:587,
    service: "gmail",
    auth:{
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASSWORD, 
    }
});


export default transporter