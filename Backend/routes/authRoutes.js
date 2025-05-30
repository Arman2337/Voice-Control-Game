// const express = require("express");
// const router = express.Router();
// const sendOTP = require("../otpMailer");

// const otpStore = new Map(); // Store OTPs in memory (use DB in production)

// // Generate & send OTP
// // router.post("/send-otp", async (req, res) => {
// //   const { email } = req.body;
// //   const otp = Math.floor(100000 + Math.random() * 900000).toString();
// //   const expiresAt = Date.now() + 5 * 60 * 1000;

// //   otpStore.set(email, { otp, expiresAt });

// //   try {
// //     await sendOTP(email, otp);
// //     res.json({ message: "OTP sent" });
// //   } catch (err) {
// //     res.status(500).json({ message: "Failed to send OTP", error: err });
// //   }
// // });

// // // Verify OTP
// // router.post("/verify-otp", (req, res) => {
// //   const { email, otp } = req.body;
// //   const stored = otpStore.get(email);

// //   if (!stored) return res.status(400).json({ message: "No OTP found" });
// //   if (stored.expiresAt < Date.now())
// //     return res.status(400).json({ message: "OTP expired" });
// //   if (stored.otp !== otp)
// //     return res.status(400).json({ message: "Invalid OTP" });

// //   // Success, delete OTP after use
// //   otpStore.delete(email);
// //   res.json({ message: "OTP verified", user: { email } });
// // });



// app.post("/api/auth/send-otp", async (req, res) => {
//   const { email } = req.body;
//   if (!email) {
//     return res.status(400).json({ message: "Email is required" });
//   }

//   const otp = Math.floor(100000 + Math.random() * 900000).toString();

//   try {
//     await transporter.sendMail({
//       from: "Your App <your-email@gmail.com>",
//       to: email,
//       subject: "Your OTP Code",
//       text: `Your OTP is ${otp}`,
//     });

//     console.log("OTP sent to:", email);
//     res.status(200).json({ message: "OTP sent", otp }); // you may remove `otp` in production
//   } catch (error) {
//     console.error("Failed to send email:", error.message);
//     res.status(500).json({ message: "Failed to send OTP" });
//   }
// });
// module.exports = router;


// authRoutes.js
// const express = require("express");
// const router = express.Router();
// const otpStore = new Map(); // In-memory store for OTPs
// const sendOtpEmail = require("../otpMailer"); // ✅ FIXED import

// // ✅ Send OTP Route
// router.post("/send-otp", async (req, res) => {
//   const { email } = req.body;

//   if (!email || !email.endsWith("@gmail.com")) {
//     return res.status(400).json({ message: "Only Gmail addresses are supported." });
//   }

//   const otp = Math.floor(100000 + Math.random() * 900000).toString();
//   otpStore.set(email, otp);

//   try {
//     await sendOtpEmail(email, otp); // ✅ Proper function call
//     res.status(200).json({ message: "OTP sent successfully." });
//   } catch (error) {
//     console.error("OTP send error:", error);
//     res.status(500).json({ message: "Failed to send OTP." });
//   }
// });

// // ✅ Verify OTP
// router.post("/verify-otp", (req, res) => {
//   const { email, otp } = req.body;
//   const storedOtp = otpStore.get(email);

//   if (storedOtp && storedOtp === otp) {
//     otpStore.delete(email);
//     res.status(200).json({ message: "OTP verified successfully", user: { email } });
//   } else {
//     res.status(400).json({ message: "Invalid or expired OTP" });
//   }
// });

// module.exports = router;



// // backend/routes/authRoutes.js
// const express = require("express");
// const router = express.Router();
// const sendOtpEmail = require("../otpMailer");
// const { db } = require("../firebase");

// // Send OTP
// router.post("/send-otp", async (req, res) => {
//   const { email } = req.body;

//   if (!email || !email.endsWith("@gmail.com")) {
//     return res.status(400).json({ message: "Only Gmail addresses are supported." });
//   }

//   const otp = Math.floor(100000 + Math.random() * 900000).toString();

//   try {
//     await db.collection("otpCodes").doc(email).set({
//       otp,
//       createdAt: Date.now(),
//     });

//     await sendOtpEmail(email, otp);
//     res.status(200).json({ message: "OTP sent successfully." });
//   } catch (error) {
//     console.error("OTP send error:", error);
//     res.status(500).json({ message: "Failed to send OTP." });
//   }
// });

// // Verify OTP
// router.post("/verify-otp", async (req, res) => {
//     const { email, otp } = req.body;
//     console.log("Verifying OTP for:", email, "with OTP:", otp);
  
//     if (!email || !otp) {
//       return res.status(400).json({ message: "Email and OTP are required." });
//     }
  
//     try {
//       const doc = await db.collection("otpCodes").doc(email).get();
  
//       if (!doc.exists) {
//         console.log("❌ OTP document not found in Firebase for:", email);
//         return res.status(400).json({ message: "OTP not found." });
//       }
  
//       const data = doc.data();
//       const now = Date.now();
  
//       if (now - data.createdAt > 10 * 60 * 1000) {
//         return res.status(400).json({ message: "OTP expired." });
//       }
  
//       if (data.otp !== otp) {
//         console.log("❌ Wrong OTP entered:", otp, "Expected:", data.otp);
//         return res.status(400).json({ message: "Invalid OTP." });
//       }
  
//       await db.collection("otpCodes").doc(email).delete();
//       return res.status(200).json({ message: "OTP verified", user: { email } });
//     } catch (err) {
//       return res.status(500).json({ message: "Server error", error: err.message });
//     }
//   });




// const express = require('express');
// const router = express.Router();
// const User = require('../models/UserModel');
// const nodemailer = require('nodemailer');

// // Send OTP
// router.post('/send-otp', async (req, res) => {
//   const { email } = req.body;
//   const otp = Math.floor(100000 + Math.random() * 900000).toString();
//   const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

//   try {
//     let user = await User.findOne({ email });
//     if (!user) user = new User({ email });
//     user.otp = otp;
//     user.otpExpires = otpExpires;
//     await user.save();

//     // Send OTP email
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: "shaikharman2337@gmail.com", // Your email
//         pass: "lrehqflmbzxgzrxk", // Your Gmail App Password
//       },
//     });

//     await transporter.sendMail({
//       from: '"Voice Game" <shaikharman2337@gmail.com>',
//       to: email,
//       subject: 'Your OTP Code',
//       text: `Your OTP is ${otp}`,
//     });

//     res.status(200).json({ message: 'OTP sent' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Verify OTP
// router.post('/verify-otp', async (req, res) => {
//   const { email, otp } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user || user.otp !== otp || user.otpExpires < Date.now()) {
//       return res.status(400).json({ message: 'Invalid or expired OTP' });
//     }

//     user.otp = null;
//     user.otpExpires = null;
//     await user.save();

//     res.status(200).json({ message: 'OTP verified successfully' });
//   } catch (err) {
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// module.exports = router;




import express from 'express';
import { isAuthenticated, login, logout, register, resetPassword, sendRestOtp, sendVerifyOtp, verifyEmail } from '../controllers/AuthController.js';
import userAuth from '../middleware/userAuth.js';


const AuthRouter = express.Router()


AuthRouter.post('/register', register)
AuthRouter.post('/login', login)
AuthRouter.post('/logout', logout)
AuthRouter.post('/send-verify-otp', userAuth, sendVerifyOtp)
AuthRouter.post('/verify-account', userAuth, verifyEmail)
AuthRouter.get('/is-auth', userAuth, isAuthenticated)
AuthRouter.post('/send-reset-otp', sendRestOtp)
AuthRouter.post('/reset-password', resetPassword)


export default AuthRouter;