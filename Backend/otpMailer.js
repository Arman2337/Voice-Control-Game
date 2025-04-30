// // backend/otpMailer.js
// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "armanshaikh2337@gmail.com", // ✅ your Gmail
//     pass: "Arman@2006",     // ✅ use Gmail App Password
//   },
// });

// const sendOTP = async (email, otp) => {
//   const mailOptions = {
//     from: '"Your App" <your.email@gmail.com>',
//     to: email,
//     subject: "Your OTP Code",
//     html: `<p>Your OTP is <strong>${otp}</strong>. It will expire in 5 minutes.</p>`,
//   };

//   await transporter.sendMail(mailOptions);
// };

// module.exports = sendOTP;



// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "armanshaikh2337@gmail.com",        // ✅ Replace with your Gmail
//     pass: "",           // ✅ Use app password (not Gmail password)
//   },
// });

// const sendOtpEmail = async (email, otp) => {
//   const mailOptions = {
//     from: "armanshaikh2337@gmail.com",        // ✅ Replace with your Gmail
//     to: email,
//     subject: "Your OTP Code",
//     text: `Your OTP is ${otp}. It is valid for 5 minutes.`,
//   };

//   await transporter.sendMail(mailOptions);
// };

// module.exports = { sendOtpEmail };


// otpMailer.js
// const nodemailer = require("nodemailer");
// const { db } = require("./firebase");

// const sendOtpByEmail = async (email) => {
//     const otp = Math.floor(100000 + Math.random() * 900000).toString();
//     const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // expires in 10 minutes
  
//     // Save OTP in Firestore
//     await db.collection("otps").doc(email).set({
//       otp,
//       expiresAt,
//     });

// const transporter = nodemailer.createTransport({
//   service: "gmail",
// //   host: "smtp.gmail.com",
// //   port: 587,
// //   secure: false,
//   auth: {
//     user: "shaikharman2337@gmail.com",       // ✅ Your Gmail address
//     pass: "lrehqflmbzxgzrxk",                // ✅ App password (NO SPACES)
//   },
// //   tls: {
// //     rejectUnauthorized: false, // For local testing only (remove in production)
// //   },
// });

// const sendOtpEmail = async (email, otp) => {
//   const mailOptions = {
//     from: '"OTP Auth" <shaikharman2337@gmail.com>',
//     to: email,
//     subject: "Your OTP Code",
//     text: `Your OTP is: ${otp}. It will expire in 10 minutes.`,
//   };

//   return transporter.sendMail(mailOptions);
// };

// module.exports = sendOtpEmail; // ✅ Correct function name exported


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
      user: "shaikharman2337@gmail.com",
      pass: "lrehqflmbzxgzrxk", // App-specific password
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
