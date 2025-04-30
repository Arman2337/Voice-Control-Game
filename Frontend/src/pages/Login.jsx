

// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { FaGoogle, FaFacebook } from "react-icons/fa";


// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const { login, loginWithProvider } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await login(email, password);
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300 text-black">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-3 border rounded"
//             required
//           />
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 border rounded pr-10"
//               required
//             />
//             <button
//               type="button"
//               className="absolute top-1 right-1 text-white"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? "🙈" : "👁"}
//             </button>
//           </div>
//           <button className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition">
//             Login
//           </button>
//         </form>
//         <div className="my-4 text-center text-gray-500">OR</div>
//         <div className="grid grid-cols-2 gap-4">
//           <button
//             onClick={() => loginWithProvider("google")}
//             className="flex items-center justify-center gap-2 p-3 border rounded hover:bg-gray-100 transition text-amber-50"
//           >
//             <FaGoogle className="text-red-500" /> Google
//           </button>
//           <button
//             onClick={() => loginWithProvider("facebook")}
//             className="flex items-center justify-center gap-2 p-3 border rounded hover:bg-gray-100 transition text-amber-50"
//           >
//             <FaFacebook className="text-blue-600" /> Facebook
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { FaGoogle, FaUserPlus } from "react-icons/fa";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const { login, loginWithProvider } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await login(email, password);
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       await loginWithProvider("google");
//       navigate("/"); // Redirect after successful login
//     } catch (error) {
//       console.error("Google login failed:", error);
//     }
//   };

//   // const handleSignUp = async() => {
//   //   try {
//   //     await 
//   //   }
//   // }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300 text-black">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
//       {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="w-full p-3 border rounded"
//         required
//         />
//         <div className="relative">
//         <input
//           type={showPassword ? "text" : "password"}
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-3 border rounded pr-10"
//           required
//         />
//         <button
//           type="button"
//           className="absolute top-1 right-1 text-white"
//           onClick={() => setShowPassword(!showPassword)}
//         >
//           {showPassword ? "🙈" : "👁"}
//         </button>
//         </div>
//         <button className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition">
//         Login
//         </button>
//       </form>
//       <div className="my-4 text-center text-gray-500">OR</div>
//       <div className="grid grid-cols-2 gap-4">
//         <button
//         onClick={handleGoogleLogin}
//         className="flex items-center justify-center gap-2 p-3 border rounded hover:bg-gray-100 transition text-white"
//         >
//         <FaGoogle className="text-red-500" /> Google
//         </button>
//         <button
//         onClick={() => navigate("/signup")}
//         className="flex items-center justify-center gap-2 p-3 border rounded hover:bg-gray-100 transition text-white"
//         >
//         <FaUserPlus className="text-blue-600" /> SignUP
//         </button>
//       </div>
//       </div>
//     </div>
//     );
// };

// export default Login;






// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { FaGoogle, FaUserPlus } from "react-icons/fa";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const { login, loginWithProvider } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await login(email, password);
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       const result = await loginWithProvider("google");
//       const userEmail = result.user.email;

//       // Send OTP to user's Gmail
//       const res = await fetch("http://localhost:5000/api/auth/send-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email: userEmail }),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         localStorage.setItem("emailForOtp", userEmail);
//         navigate("/otp-login");
//       } else {
//         setError(data.message || "Failed to send OTP");
//       }
//     } catch (error) {
//       console.error("Google login failed:", error);
//       setError("Google login failed");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300 text-black">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-3 border rounded"
//             required
//           />
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 border rounded pr-10"
//               required
//             />
//             <button
//               type="button"
//               className="absolute top-1 right-1 text-white"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? "🙈" : "👁"}
//             </button>
//           </div>
//           <button className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition">
//             Login
//           </button>
//         </form>
//         <div className="my-4 text-center text-gray-500">OR</div>
//         <div className="grid grid-cols-2 gap-4">
//           <button
//             onClick={handleGoogleLogin}
//             className="flex items-center justify-center gap-2 p-3 border rounded hover:bg-gray-100 transition text-white"
//           >
//             <FaGoogle className="text-red-500" /> Google
//           </button>
//           <button
//             onClick={() => navigate("/signup")}
//             className="flex items-center justify-center gap-2 p-3 border rounded hover:bg-gray-100 transition text-white"
//           >
//             <FaUserPlus className="text-blue-600" /> SignUP
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



// src/context/AuthContext.js
// import { createContext, useContext, useEffect, useState } from "react";
// import {
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
//   onAuthStateChanged
// } from "firebase/auth";
// import { auth, db } from "../firebaseConfig";
// import { doc, setDoc } from "firebase/firestore";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const provider = new GoogleAuthProvider();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   const loginWithProvider = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;

//       // Save to Firestore
//       await setDoc(doc(db, "users", user.uid), {
//         name: user.displayName,
//         email: user.email,
//         photoURL: user.photoURL,
//         uid: user.uid,
//       });

//       setUser(user);
//       return user.email; // ✅ Let caller handle navigation/OTP
//     } catch (error) {
//       console.error("Google Login Error:", error.message);
//       throw error;
//     }
//   };

//   const logout = async () => {
//     try {
//       await signOut(auth);
//       setUser(null);
//       localStorage.removeItem("otp-email");
//     } catch (error) {
//       console.error("Logout Error:", error.message);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, loginWithProvider, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);




// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { FaGoogle, FaUserPlus } from "react-icons/fa";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const { loginWithProvider } = useAuth();
//   const navigate = useNavigate();

//   const handleGoogleLogin = async () => {
//   try {
//     const email = await loginWithProvider();
//     if (!email) {
//       console.warn("Google login returned no email");
//       return;
//     }

//     console.log("✅ Email to send OTP:", email);

//     const response = await fetch("http://localhost:5000/api/auth/send-otp", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email }),
//     });

//     const data = await response.json();
//     console.log("🔁 Server response:", data);

//     if (response.ok) {
//       localStorage.setItem("otp-email", email);
//       console.log("✅ OTP sent successfully");
//       // Optional: redirect to OTP input page or show OTP modal
//     } else {
//       console.error("❌ Failed to send OTP:", data.message);
//     }
//   } catch (err) {
//     console.error("⚠️ Error during Google login or OTP request:", err.message);
//   }
// };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300 text-black">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//         <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-3 border rounded"
//             required
//           />
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 border rounded pr-10"
//               required
//             />
//             <button
//               type="button"
//               className="absolute top-1 right-1 text-white"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? "🙈" : "👁"}
//             </button>
//           </div>
//           <button className="w-full bg-gray-800 text-white p-3 rounded hover:bg-gray-900 transition">
//             Login
//           </button>
//         </form>
//         <div className="my-4 text-center text-gray-500">OR</div>
//         <div className="grid grid-cols-2 gap-4">
//           <button
//             onClick={handleGoogleLogin}
//             className="flex items-center justify-center gap-2 p-3 bg-black text-white border rounded hover:bg-gray-800 transition"
//           >
//             <FaGoogle className="text-red-500" /> Google
//           </button>
//           <button
//             onClick={() => navigate("/signup")}
//             className="flex items-center justify-center gap-2 p-3 bg-black text-white border rounded hover:bg-gray-800 transition"
//           >
//             <FaUserPlus className="text-blue-400" /> SignUP
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { FaGoogle, FaUserPlus } from "react-icons/fa";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const { loginWithProvider } = useAuth();
//   const navigate = useNavigate();

//   const handleGoogleLogin = async () => {
//     setError(""); // reset any previous errors
//     try {
//       const email = await loginWithProvider();
//       console.log("Returned from loginWithProvider:", email);
//       if (!email) {
//         setError("Google login was cancelled or failed.");
//         return;
//       }

//       console.log("📨 Sending OTP to:", email);

//       const response = await fetch("http://localhost:5000/api/auth/send-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ email })
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem("otp-email", email);
//         console.log("✅ OTP sent:", data.message);
//         navigate("/verify-otp"); // go to OTP verification page
//       } else {
//         console.error("❌ Server error:", data.message);
//         setError(data.message || "Failed to send OTP");
//       }
//     } catch (err) {
//       console.error("⚠️ Error during Google login or OTP request:", err.message);
//       setError("Something went wrong. Try again.");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300 text-black">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//         <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-3 border rounded"
//             required
//           />
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 border rounded pr-10"
//               required
//             />
//             <button
//               type="button"
//               className="absolute top-1 right-1 text-white"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? "🙈" : "👁"}
//             </button>
//           </div>
//           <button className="w-full bg-gray-800 text-white p-3 rounded hover:bg-gray-900 transition">
//             Login
//           </button>
//         </form>

//         <div className="my-4 text-center text-gray-500">OR</div>

//         <div className="grid grid-cols-2 gap-4">
//           <button
//             onClick={handleGoogleLogin}
//             className="flex items-center justify-center gap-2 p-3 bg-black text-white border rounded hover:bg-gray-800 transition"
//           >
//             <FaGoogle className="text-red-500" /> Google
//           </button>
//           <button
//             onClick={() => navigate("/signup")}
//             className="flex items-center justify-center gap-2 p-3 bg-black text-white border rounded hover:bg-gray-800 transition"
//           >
//             <FaUserPlus className="text-blue-400" /> SignUP
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { FaGoogle, FaUserPlus } from "react-icons/fa";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [localLoading, setLocalLoading] = useState(false);
//   const { loginWithProvider, authLoading, authError } = useAuth();
//   const navigate = useNavigate();

//   const handleGoogleLogin = async () => {
//     setError("");
//     setLoading(true);
//     try {
//       const userEmail = await loginWithProvider();
//       console.log("✅ Google login result:", userEmail);
  
//       if (!userEmail) {
//         setError("Google login was cancelled. Please try again or use the email/password login.");
//         return;
//       }
  
//       console.log("📨 Sending OTP to:", userEmail);
  
//       const response = await fetch("http://localhost:5000/api/auth/send-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email: userEmail }),
//       });
  
//       console.log("✅ Fetch response status:", response.status);
//       const data = await response.json();
//       console.log("✅ Fetch response data:", data);
  
//       if (response.ok) {
//         localStorage.setItem("otp-email", userEmail);
//         console.log("✅ OTP sent:", data.message);
//         navigate("/verify-otp");
//       } else {
//         throw new Error(data.message || "Failed to send OTP.");
//       }
//     } catch (err) {
//       console.error("⚠️ Error during Google login or OTP request:", err.message);
//       setError(err.message || "Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const isLoading = authLoading || localLoading;

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300 text-black">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
//         {/* Error display with retry button */}
//         {(error || authError) && (
//           <div className="mb-4 p-3 bg-red-100 rounded-lg flex items-center justify-between">
//             <span className="text-red-500">{error || authError}</span>
//             <button 
//               onClick={handleGoogleLogin}
//               className="ml-2 px-2 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
//             >
//               Try Again
//             </button>
//           </div>
//         )}

//         <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-3 border rounded"
//             required
//           />
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 border rounded pr-10"
//               required
//             />
//             <button
//               type="button"
//               className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? "🙈" : "👁"}
//             </button>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-gray-800 text-white p-3 rounded hover:bg-gray-900 transition"
//           >
//             Login
//           </button>
//         </form>

//         <div className="my-4 text-center text-gray-500">OR</div>

//         <div className="grid grid-cols-2 gap-4">
//           <button
//             onClick={handleGoogleLogin}
//             disabled={isLoading}
//             className={`flex items-center justify-center gap-2 p-3 border rounded transition ${
//               isLoading
//                 ? "bg-gray-500 cursor-not-allowed text-white"
//                 : "bg-black text-white hover:bg-gray-800"
//             }`}
//           >
//             {isLoading ? (
//               <span className="flex items-center">
//                 <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Processing...
//               </span>
//             ) : (
//               <>
//                 <FaGoogle className="text-red-500" /> Google
//               </>
//             )}
//           </button>
//           <button
//             onClick={() => navigate("/signup")}
//             className="flex items-center justify-center gap-2 p-3 bg-black text-white border rounded hover:bg-gray-800 transition"
//           >
//             <FaUserPlus className="text-blue-400" /> Sign Up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { FaGoogle, FaUserPlus } from "react-icons/fa";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
  
//   const { loginWithProvider } = useAuth();
//   const navigate = useNavigate();

//   // Handle Google login with OTP flow
//   // const handleGoogleLogin = async () => {
//   //   setError("");
//   //   setLoading(true);
//   //   try {
//   //     const userEmail = await loginWithProvider();
//   //     console.log("✅ Google login result:", userEmail);

//   //     if (!userEmail) {
//   //       setError("Google login was cancelled. Please try again or use the email/password login.");
//   //       return;
//   //     }

//   //     console.log("📨 Sending OTP to:", userEmail);

//   //     const response = await fetch("http://localhost:5000/api/auth/send-otp", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify({ email: userEmail }),
//   //     });

//   //     console.log("✅ Fetch response status:", response.status);
//   //     const data = await response.json();
//   //     console.log("✅ Fetch response data:", data);

//   //     if (response.ok) {
//   //       localStorage.setItem("otp-email", userEmail);
//   //       console.log("✅ OTP sent:", data.message);
//   //       navigate("/verify-otp");
//   //     } else {
//   //       throw new Error(data.message || "Failed to send OTP.");
//   //     }
//   //   } catch (err) {
//   //     console.error("⚠️ Error during Google login or OTP request:", err.message);
//   //     setError(err.message || "Something went wrong. Please try again.");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   // // Handle email/password login (placeholder)
//   // const handleEmailLogin = async (e) => {
//   //   e.preventDefault();
//   //   setError("");
//   //   setLoading(true);
//   //   try {
//   //     // Replace with actual loginWithEmail logic if available
//   //     setError("Email login not implemented yet.");
//   //   } catch (err) {
//   //     setError(err.message || "Login failed. Please try again.");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };


//   const handleGoogleLogin = async () => {
//     setError("");
//     setLoading(true);
  
//     try {
//       const email = await loginWithProvider();
  
//       if (!email) {
//         setError("Google login failed or cancelled.");
//         return;
//       }
  
//       const response = await fetch("http://localhost:5000/api/auth/send-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });
  
//       const data = await response.json();
  
//       if (response.ok) {
//         localStorage.setItem("otp-email", email);
//         navigate("/verify-otp");
//       } else {
//         setError(data.message || "Failed to send OTP.");
//       }
//     } catch (error) {
//       setError("Something went wrong.");
//       console.error("OTP Send Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   // Render retry button if Google login was cancelled
//   const renderRetryButton = () => {
//     if (error.includes("Google login was cancelled")) {
//       return (
//         <button
//           onClick={handleGoogleLogin}
//           className="w-full mt-4 p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//           disabled={loading}
//         >
//           Retry Google Login
//         </button>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300 text-black">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
//         {error && (
//           <p className="text-red-500 text-center mb-4" role="alert">
//             {error}
//           </p>
//         )}
//         {renderRetryButton()}

//         <form onSubmit={handleEmailLogin} className="space-y-4">
//           <div>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//               disabled={loading}
//               aria-label="Email"
//             />
//           </div>
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
//               required
//               disabled={loading}
//               aria-label="Password"
//             />
//             <button
//               type="button"
//               className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600"
//               onClick={() => setShowPassword(!showPassword)}
//               disabled={loading}
//               aria-label={showPassword ? "Hide password" : "Show password"}
//             >
//               {showPassword ? "🙈" : "👁"}
//             </button>
//           </div>
//           <button
//             type="submit"
//             className={`w-full p-3 rounded transition ${
//               loading
//                 ? "bg-gray-500 cursor-not-allowed text-white"
//                 : "bg-gray-800 text-white hover:bg-gray-900"
//             }`}
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <div className="my-4 text-center text-gray-500">OR</div>

//         <div className="grid grid-cols-2 gap-4">
//           <button
//             onClick={handleGoogleLogin}
//             disabled={loading}
//             className={`flex items-center justify-center gap-2 p-3 border rounded transition ${
//               loading
//                 ? "bg-gray-500 cursor-not-allowed text-white"
//                 : "bg-black text-white hover:bg-gray-800"
//             }`}
//             aria-label="Login with Google"
//           >
//             {loading ? (
//               "Processing..."
//             ) : (
//               <>
//                 <FaGoogle className="text-red-500" /> Google
//               </>
//             )}
//           </button>
//           <button
//             onClick={() => navigate("/signup")}
//             disabled={loading}
//             className={`flex items-center justify-center gap-2 p-3 border rounded transition ${
//               loading
//                 ? "bg-gray-500 cursor-not-allowed text-white"
//                 : "bg-black text-white hover:bg-gray-800"
//             }`}
//             aria-label="Sign up"
//           >
//             <FaUserPlus className="text-blue-400" /> Sign Up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { FaGoogle, FaUserPlus } from "react-icons/fa";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const { loginWithProvider } = useAuth();
//   const navigate = useNavigate();

//   const handleGoogleLogin = async () => {
//     setError("");
//     setLoading(true);

//     try {
//       const userEmail = await loginWithProvider();

//       if (!userEmail) {
//         setError("Google login failed or cancelled.");
//         return;
//       }

//       const response = await fetch("http://localhost:5000/api/auth/send-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email: userEmail }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem("otp-email", userEmail);
//         navigate("/verify-otp");
//       } else {
//         setError(data.message || "Failed to send OTP.");
//       }
//     } catch (error) {
//       setError("Something went wrong.");
//       console.error("OTP Send Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300 text-black">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
//         {error && (
//           <p className="text-red-500 text-center mb-4" role="alert">
//             {error}
//           </p>
//         )}

//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             setError("Email/password login is disabled. Please use Google login.");
//           }}
//           className="space-y-4"
//         >
//           <div>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//               disabled={loading}
//             />
//           </div>
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
//               required
//               disabled={loading}
//             />
//             <button
//               type="button"
//               className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600"
//               onClick={() => setShowPassword(!showPassword)}
//               disabled={loading}
//               aria-label={showPassword ? "Hide password" : "Show password"}
//             >
//               {showPassword ? "🙈" : "👁"}
//             </button>
//           </div>
//           <button
//             type="submit"
//             className={`w-full p-3 rounded transition ${
//               loading
//                 ? "bg-gray-500 cursor-not-allowed text-white"
//                 : "bg-gray-800 text-white hover:bg-gray-900"
//             }`}
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <div className="my-4 text-center text-gray-500">OR</div>

//         <div className="grid grid-cols-2 gap-4">
//           <button
//             onClick={handleGoogleLogin}
//             disabled={loading}
//             className={`flex items-center justify-center gap-2 p-3 border rounded transition ${
//               loading
//                 ? "bg-gray-500 cursor-not-allowed text-white"
//                 : "bg-black text-white hover:bg-gray-800"
//             }`}
//             aria-label="Login with Google"
//           >
//             {loading ? (
//               "Processing..."
//             ) : (
//               <>
//                 <FaGoogle className="text-red-500" /> Google
//               </>
//             )}
//           </button>
//           <button
//             onClick={() => navigate("/signup")}
//             disabled={loading}
//             className={`flex items-center justify-center gap-2 p-3 border rounded transition ${
//               loading
//                 ? "bg-gray-500 cursor-not-allowed text-white"
//                 : "bg-black text-white hover:bg-gray-800"
//             }`}
//             aria-label="Sign up"
//           >
//             <FaUserPlus className="text-blue-400" /> Sign Up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { FaGoogle, FaUserPlus } from "react-icons/fa";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const { loginWithProvider } = useAuth();
//   const navigate = useNavigate();
  
//   const handleGoogleLogin = async () => {
//     setError("");
//     setLoading(true);
//     try {
//       await loginWithProvider(); // Will redirect
//     } catch (err) {
//       setError("Google sign-in failed.");
//       console.error("Google login error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300 text-black">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
//         {error && (
//           <p className="text-red-500 text-center mb-4" role="alert">
//             {error}
//           </p>
//         )}

//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             setError("Email/password login is disabled. Please use Google login.");
//           }}
//           className="space-y-4"
//         >
//           <div>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//               disabled={loading}
//             />
//           </div>
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
//               required
//               disabled={loading}
//             />
//             <button
//               type="button"
//               className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600"
//               onClick={() => setShowPassword(!showPassword)}
//               disabled={loading}
//               aria-label={showPassword ? "Hide password" : "Show password"}
//             >
//               {showPassword ? "🙈" : "👁"}
//             </button>
//           </div>
//           <button
//             type="submit"
//             className={`w-full p-3 rounded transition ${
//               loading
//                 ? "bg-gray-500 cursor-not-allowed text-white"
//                 : "bg-gray-800 text-white hover:bg-gray-900"
//             }`}
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <div className="my-4 text-center text-gray-500">OR</div>

//         <div className="grid grid-cols-2 gap-4">
//           <button
//             onClick={handleGoogleLogin}
//             disabled={loading}
//             className={`flex items-center justify-center gap-2 p-3 border rounded transition ${
//               loading
//                 ? "bg-gray-500 cursor-not-allowed text-white"
//                 : "bg-black text-white hover:bg-gray-800"
//             }`}
//             aria-label="Login with Google"
//           >
//             {loading ? (
//               "Redirecting..."
//             ) : (
//               <>
//                 <FaGoogle className="text-red-500" /> Google
//               </>
//             )}
//           </button>
//           <button
//             onClick={() => navigate("/signup")}
//             disabled={loading}
//             className={`flex items-center justify-center gap-2 p-3 border rounded transition ${
//               loading
//                 ? "bg-gray-500 cursor-not-allowed text-white"
//                 : "bg-black text-white hover:bg-gray-800"
//             }`}
//             aria-label="Sign up"
//           >
//             <FaUserPlus className="text-blue-400" /> Sign Up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


  import React, { useContext, useState } from 'react'
  import { assets } from '../assets/assets'
  import { useNavigate } from 'react-router-dom'
  import { AppContext } from '../context/AppContext'
  import axios from 'axios'
  import {toast} from 'react-toastify'



  const Login = () => {

    const [state, setState] = useState('Sign Up')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const navigate =  useNavigate()
    const {backendUrl, setIsLogin, getUserData} = useContext(AppContext)


    const onSubmitHandler = async (e) => {
      try {
          e.preventDefault()
          axios.defaults.withCredentials = true //this will send cookies with every request
          if(state === 'Sign Up'){
          const {data} =   await axios.post(backendUrl + '/api/auth/register', {name, email, password})
            console.log(data)
            if(data.success){
              setIsLogin(true)
              toast.success('Sign up successful! Redirecting...');
          navigate('/quiz'); 
            }else{
              toast.error(data.message)
            }

          }else{
            const {data} =   await axios.post(backendUrl + '/api/auth/login', {email, password})
            console.log(data)
            if(data.success){
              setIsLogin(true)
              getUserData()
              navigate('/')
            }else{
              toast.error(data.message)
            }
          }
      }catch(error) {
        toast.error(error.message)
        
      }
    }

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 to-indigo-600 px-4">
        {/* Logo (optional) */}
        {/* <img onClick={() => navigate('/')} src={assets.logo} className="absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer" /> */}
    
        <div className="bg-slate-900 p-8 sm:p-10 rounded-2xl shadow-2xl w-full max-w-md text-indigo-300 text-sm">
          <h2 className="text-3xl font-bold text-white text-center mb-2">{state === 'Sign Up' ? 'Create Account' : 'Login'}</h2>
          <p className="text-center text-gray-400 mb-6">{state === 'Sign Up' ? 'Create your account' : 'Login to your account!'}</p>
    
          <form onSubmit={onSubmitHandler} className="space-y-4">
            {state === 'Sign Up' && (
              <div className="flex items-center gap-3 w-full px-5 py-3 rounded-full bg-[#333A5C]">
                <img src={assets.person_icon} alt="Person Icon" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  required
                  className="bg-transparent flex-1 text-white outline-none"
                />
              </div>
            )}
    
            <div className="flex items-center gap-3 w-full px-5 py-3 rounded-full bg-[#333A5C]">
              <img src={assets.mail_icon} alt="Mail Icon" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email id"
                required
                className="bg-transparent flex-1 text-white outline-none"
              />
            </div>
    
            <div className="flex items-center gap-3 w-full px-5 py-3 rounded-full bg-[#333A5C]">
              <img src={assets.lock_icon} alt="Lock Icon" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="bg-transparent flex-1 text-white outline-none"
              />
            </div>
    
            <p
              onClick={() => navigate('/reset-password')}
              className="text-right text-indigo-400 text-xs cursor-pointer hover:underline"
            >
              Forgot password?
            </p>
    
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-semibold hover:opacity-90 transition"
            >
              {state}
            </button>
          </form>
    
          <div className="text-center mt-6 text-xs text-gray-400">
            {state === 'Sign Up' ? (
              <>
                Already have an account?{' '}
                <span
                  onClick={() => setState('Login')}
                  className="text-blue-400 underline cursor-pointer"
                >
                  Login here
                </span>
              </>
            ) : (
              <>
                Don't have an account?{' '}
                <span
                  onClick={() => setState('Sign Up')}
                  className="text-blue-400 underline cursor-pointer"
                >
                  Sign up
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    );
    
  }

  export default Login



// import React, { useState, useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { FaGoogle, FaUserPlus } from "react-icons/fa";

// const Login = () => {
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { loginWithProvider } = useAuth();
//   const navigate = useNavigate();

//   const handleGoogleLogin = async () => {
//     setError("");
//     setLoading(true);
//     try {
//       const userCredential = await loginWithProvider(); // Google Login

//       if (userCredential?.user?.email) {
//         localStorage.setItem("otp-email", userCredential.user.email); // Save email
//         navigate("/otp-login"); // ✅ Redirect to OTP Page
//       } else {
//         setError("Google login failed. No user data.");
//       }
//     } catch (err) {
//       console.error("Google login error:", err);
//       setError("Google sign-in failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300 text-black">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//         <div className="space-y-4">
//           <button
//             onClick={handleGoogleLogin}
//             disabled={loading}
//             className={`flex items-center justify-center gap-2 w-full p-3 border rounded transition ${
//               loading
//                 ? "bg-gray-500 cursor-not-allowed text-white"
//                 : "bg-black text-white hover:bg-gray-800"
//             }`}
//           >
//             {loading ? "Redirecting..." : (<><FaGoogle className="text-red-500" /> Continue with Google</>)}
//           </button>

//           <button
//             onClick={() => navigate("/signup")}
//             disabled={loading}
//             className={`flex items-center justify-center gap-2 w-full p-3 border rounded transition ${
//               loading
//                 ? "bg-gray-500 cursor-not-allowed text-white"
//                 : "bg-black text-white hover:bg-gray-800"
//             }`}
//           >
//             <FaUserPlus className="text-blue-400" /> Create an Account
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;





// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { FaGoogle, FaUserPlus } from "react-icons/fa";

// const Login = () => {
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { loginWithProvider } = useAuth();
//   const navigate = useNavigate();

//   const handleGoogleLogin = async () => {
//     setError("");
//     setLoading(true);

//     try {
//       const email = await loginWithProvider();
//       if (!email) {
//         setError("Login failed. Please try again.");
//         return;
//       }

//       const response = await fetch("http://localhost:5000/api/auth/send-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         localStorage.setItem("otp-email", email);
//         navigate("/verify-otp");
//       } else {
//         setError(data.message || "Failed to send OTP.");
//       }
//     } catch (err) {
//       if (err.code === "auth/popup-closed-by-user") {
//         setError("⚠️ You closed the login popup before completing sign-in.");
//       } else {
//         setError("Something went wrong. Please try again.");
//       }
//       console.error("Login error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300 text-black">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//         <div className="grid grid-cols-1 gap-4">
//           <button
//             onClick={handleGoogleLogin}
//             disabled={loading}
//             className={`flex items-center justify-center gap-2 p-3 border rounded transition ${
//               loading
//                 ? "bg-gray-500 cursor-not-allowed text-white"
//                 : "bg-black text-white hover:bg-gray-800"
//             }`}
//           >
//             {loading ? "Processing..." : <>
//               <FaGoogle className="text-red-500" /> Login with Google
//             </>}
//           </button>

//           <button
//             onClick={() => navigate("/signup")}
//             disabled={loading}
//             className={`flex items-center justify-center gap-2 p-3 border rounded transition ${
//               loading
//                 ? "bg-gray-500 cursor-not-allowed text-white"
//                 : "bg-black text-white hover:bg-gray-800"
//             }`}
//           >
//             <FaUserPlus className="text-blue-400" /> Sign Up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
