// File: otpMailer.js

// backend/otpMailer.js

const nodemailer = require("nodemailer");
const { db } = require("./firebase");

const sendOtpByEmail = async (email) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // expires in 10 minutes

  // Save OTP in Firestore
  await db.collection("otps").doc(email).set({
    otp,
    expiresAt,
  });

  // Configure Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASSWORD, // App-specific password
    },
  });

  // Email content
  const mailOptions = {
    from: '"OTP Auth" <shaikharman2337@gmail.com>',
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is: ${otp}. It will expire in 10 minutes.`,
  };

  // Send Email
  await transporter.sendMail(mailOptions);

  return otp;
};

module.exports = { sendOtpByEmail };
