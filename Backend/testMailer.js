const sendOtpEmail = require("./otpMailer"); // ✅ this now works
sendOtpEmail("shabanaf1988@gmail.com", "123456")
  .then(() => console.log("Email sent"))
  .catch(console.error);
