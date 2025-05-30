


// frontend/pages/OtpLogin.jsx
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const OtpLogin = () => {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedEmail = localStorage.getItem("emailForOtp");
//     if (savedEmail) {
//       setEmail(savedEmail);
//     } else {
//       setMessage("No email found. Please login again.");
//     }
//   }, []);

//   const verifyOTP = async () => {
//     const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, otp }),
//     });

//     const data = await res.json();
//     setMessage(data.message);

//     if (res.ok) {
//       alert(`Logged in as ${data.user.email}`);
//       localStorage.removeItem("emailForOtp");
//       navigate("/dashboard");
//     }
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto mt-20 border rounded-lg shadow-lg bg-white">
//       <h2 className="text-xl font-bold mb-4 text-center">Verify OTP</h2>
//       <p className="mb-2 text-sm text-gray-600 text-center">
//         OTP sent to <strong>{email}</strong>
//       </p>
//       <input
//         type="text"
//         placeholder="Enter OTP"
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//         className="border px-2 py-1 w-full mb-4"
//       />
//       <button
//         onClick={verifyOTP}
//         className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700 transition"
//       >
//         Verify OTP
//       </button>
//       <p className="mt-4 text-sm text-center text-gray-600">{message}</p>
//     </div>
//   );
// };

// export default OtpLogin;




// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const OtpLogin = () => {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedEmail = localStorage.getItem("emailForOtp");
//     if (savedEmail) {
//       setEmail(savedEmail);
//     } else {
//       setMessage("No email found. Please login again.");
//     }
//   }, []);

//   const verifyOTP = async () => {
//     const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, otp }),
//     });

//     const data = await res.json();
//     setMessage(data.message);

//     if (res.ok) {
//       alert(`Logged in as ${data.user.email}`);
//       localStorage.removeItem("emailForOtp");
//       navigate("/dashboard");
//     }
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto mt-20 border rounded-lg shadow-lg bg-white">
//       <h2 className="text-xl font-bold mb-4 text-center">Verify OTP</h2>
//       <p className="mb-2 text-sm text-gray-600 text-center">
//         OTP sent to <strong>{email}</strong>
//       </p>
//       <input
//         type="text"
//         placeholder="Enter OTP"
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//         className="border px-2 py-1 w-full mb-4"
//       />
//       <button
//         onClick={verifyOTP}
//         className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700 transition"
//       >
//         Verify OTP
//       </button>
//       <p className="mt-4 text-sm text-center text-gray-600">{message}</p>
//     </div>
//   );
// };

// export default OtpLogin;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const OtpLogin = () => {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedEmail = localStorage.getItem("otp-email");
//     if (savedEmail) {
//       setEmail(savedEmail);
//       sendOtp(savedEmail);
//     } else {
//       setMessage("No email found. Please login again.");
//     }
//   }, []);

//   const sendOtp = async (userEmail) => {
//     try {
//       const res = await fetch("http://localhost:5000/api/auth/send-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email: userEmail }),
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || "Failed to send OTP");
//       setMessage(`OTP sent to ${userEmail}`);
//     } catch (err) {
//       setMessage(err.message);
//     }
//   };

//   const verifyOTP = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, otp }),
//       });

//       const data = await res.json();
//       setMessage(data.message);

//       if (res.ok) {
//         alert(`Logged in as ${data.user.email}`);
//         localStorage.removeItem("otp-email");
//         navigate("/");
//       }
//     } catch (error) {
//       setMessage("Verification failed. Please try again.");
//       console.error("OTP Verification Error:", error);
//     }
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto mt-20 border rounded-lg shadow-lg bg-white">
//       <h2 className="text-xl font-bold mb-4 text-center">Verify OTP</h2>
//       <p className="mb-2 text-sm text-gray-600 text-center">
//         OTP sent to <strong>{email}</strong>
//       </p>
//       <input
//         type="text"
//         placeholder="Enter OTP"
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//         className="border px-2 py-1 w-full mb-4"
//       />
//       <button
//         onClick={verifyOTP}
//         className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700 transition"
//       >
//         Verify OTP
//       </button>
//       <p className="mt-4 text-sm text-center text-gray-600">{message}</p>
//     </div>
//   );
// };

// export default OtpLogin;




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OtpLogin = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem("otp-email");
    if (savedEmail) {
      setEmail(savedEmail);
      sendOtp(savedEmail);
    } else {
      setMessage("No email found. Please login again.");
    }
  }, []);

  const sendOtp = async (userEmail) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send OTP");
      setMessage(`OTP sent to ${userEmail}`);
    } catch (err) {
      setMessage(err.message);
    }
  };

  const verifyOTP = async () => {
    if (!otp) {
      setMessage("Please enter the OTP.");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();
      setMessage(data.message);

      if (res.ok) {
        alert(`Logged in as ${data.user.email}`);
        localStorage.removeItem("otp-email");
        navigate("/dashboard"); // ✅ After successful login, go to dashboard
      }
    } catch (error) {
      setMessage("Verification failed. Please try again.");
      console.error("OTP Verification Error:", error);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto mt-20 border rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4 text-center">Verify OTP</h2>
      {email && (
        <p className="mb-2 text-sm text-gray-600 text-center">
          OTP sent to <strong>{email}</strong>
        </p>
      )}
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="border px-2 py-1 w-full mb-4"
      />
      <button
        onClick={verifyOTP}
        className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700 transition"
      >
        Verify OTP
      </button>
      <p className="mt-4 text-sm text-center text-gray-600">{message}</p>
    </div>
  );
};

export default OtpLogin;
