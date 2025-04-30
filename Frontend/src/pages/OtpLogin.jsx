

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const OtpLogin = () => {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [step, setStep] = useState(2); // Assume OTP screen since user logged in with Google
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedEmail = localStorage.getItem("emailForOtp");
//     if (savedEmail) {
//       setEmail(savedEmail);
//     } else {
//       setError(true);
//       setMessage("No email found. Please login with Google again.");
//       setStep(1);
//     }
//   }, []);

//   const verifyOTP = async () => {
//     if (!otp) {
//       setError(true);
//       setMessage("Please enter the OTP.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, otp }),
//       });

//       const data = await res.json();
//       setLoading(false);

//       if (!res.ok) {
//         setError(true);
//         setMessage(data.message || "Invalid OTP.");
//         return;
//       }

//       // OTP is correct
//       setError(false);
//       setMessage("✅ OTP verified! Redirecting...");
//       localStorage.removeItem("emailForOtp");

//       setTimeout(() => {
//         navigate("/home"); // Or "/dashboard"
//       }, 1000);
//     } catch (err) {
//       setLoading(false);
//       setError(true);
//       setMessage("Server error. Try again later.");
//     }
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto mt-20 border rounded-xl shadow-lg bg-white text-center">
//       <h2 className="text-2xl font-extrabold mb-6 text-gray-800">🔐 Verify OTP</h2>

//       {step === 1 ? (
//         <>
//           <input
//             type="email"
//             placeholder="Enter your Gmail"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="border px-3 py-2 w-full mb-4 rounded"
//           />
//           <p className="text-sm text-gray-600 mb-4">
//             Please go back and log in with Google again.
//           </p>
//         </>
//       ) : (
//         <>
//           <p className="text-sm text-gray-600 mb-3">
//             OTP sent to <strong>{email}</strong>
//           </p>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             className="border px-3 py-2 w-full mb-4 rounded text-center font-mono tracking-widest"
//           />
//           <button
//             onClick={verifyOTP}
//             disabled={loading}
//             className="bg-green-600 hover:bg-green-700 transition text-white px-4 py-2 rounded w-full font-semibold"
//           >
//             {loading ? "Verifying..." : "✅ Verify OTP"}
//           </button>
//         </>
//       )}

//       {message && (
//         <p className={`mt-5 text-sm ${error ? "text-red-600" : "text-green-600"}`}>
//           {message}
//         </p>
//       )}
//     </div>
//   );
// };

// export default OtpLogin;



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
