// // import { createContext, useContext, useEffect, useState } from "react";
// // import { auth } from "../firebaseConfig";
// // import { onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";

// // // // Create authentication context
// // const AuthContext = createContext();

// // export const useAuth = () => useContext(AuthContext);

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       setUser(currentUser);
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   const login = (email, password) => {
// //     return signInWithEmailAndPassword(auth, email, password);
// //   };

// //   const signUp = (email, password) => {
// //     return createUserWithEmailAndPassword(auth, email, password);
// //   };

// //   const logout = () => {
// //     return signOut(auth);
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, login, signUp, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };


// // // export const AuthProvider = ({ children }) => {
// // //     const [user, setUser] = useState(null);
  
// // //     useEffect(() => {
// // //       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// // //         setUser(currentUser);
// // //       });
// // //       return unsubscribe;
// // //     }, []);
  
// // //     return (
// // //       <AuthContext.Provider value={{ user }}>
// // //         {children}
// // //       </AuthContext.Provider>
// // //     );
// // //   };
// // // };



// // import { createContext, useContext, useEffect, useState } from "react";
// // import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
// // import { auth } from "../firebaseConfig"; // Ensure correct Firebase import
// // // import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       setUser(currentUser);
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   const loginWithProvider = async () => {
// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       const user = result.user;
  
// //       await setDoc(doc(db, "users", user.uid), {
// //         name: user.displayName,
// //         email: user.email,
// //         photoURL: user.photoURL,
// //         uid: user.uid,
// //       });
  
// //       setAuthState({ user });  // Ensure state updates
// //     } catch (error) {
// //       console.error("Google Login Error:", error.message);
// //     }
// //   };
  

// //   const logout = async () => {
// //     try {
// //       await auth.signOut();
// //       setAuthState(null);
// //     } catch (error) {
// //       console.error("Logout Error:", error.message);
// //     }
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, loginWithProvider, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);




// // import { createContext, useContext, useEffect, useState } from "react";
// // import { 
// //   GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, 
// //   sendEmailVerification 
// // } from "firebase/auth";
// // import { auth, db } from "../firebaseConfig";
// // import { doc, setDoc } from "firebase/firestore"; 

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const provider = new GoogleAuthProvider();  // ✅ Define provider

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       console.log('Current User:', currentUser); // <-- Check the console
// //       setUser(currentUser);
// //     });
// //     return () => unsubscribe();
// //   }, []);
  

// //   const loginWithProvider = async () => {
// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       const user = result.user;

// //       // ✅ Save user data to Firestore
// //       await setDoc(doc(db, "users", user.uid), {
// //         name: user.displayName,
// //         email: user.email,
// //         photoURL: user.photoURL,
// //         uid: user.uid,
// //       });

// //       setUser(user);  // ✅ Ensure state updates
// //     } catch (error) {
// //       console.error("Google Login Error:", error.message);
// //     }
// //   };

// //   const logout = async () => {
// //     try {
// //       await signOut(auth);
// //       setUser(null);
// //     } catch (error) {
// //       console.error("Logout Error:", error.message);
// //     }
// //   };

// //   const sendVerificationEmail = async () => {
// //     if (auth.currentUser) {
// //       try {
// //         await sendEmailVerification(auth.currentUser);
// //         alert("Verification email sent!");
// //       } catch (error) {
// //         console.error("Email Verification Error:", error.message);
// //       }
// //     }
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, loginWithProvider, logout, sendVerificationEmail }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);





// // import { createContext, useContext, useEffect, useState } from "react";
// // import { 
// //   GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged 
// // } from "firebase/auth";
// // import { auth, db } from "../firebaseConfig";
// // import { doc, setDoc } from "firebase/firestore";
// // import { useNavigate } from "react-router-dom";

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const provider = new GoogleAuthProvider();
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       setUser(currentUser);
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   const loginWithProvider = async () => {
// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       const user = result.user;

// //       // Save to Firestore
// //       await setDoc(doc(db, "users", user.uid), {
// //         name: user.displayName,
// //         email: user.email,
// //         photoURL: user.photoURL,
// //         uid: user.uid,
// //       });

// //       // Save to local state
// //       setUser(user);

// //       // Save email to localStorage for OTP verification
// //       localStorage.setItem("otp-email", user.email);

// //       // Send OTP to email via backend
// //       const response = await fetch("http://localhost:5000/api/auth/send-otp", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ email: user.email }),
// //       });

// //       const data = await response.json();
// //       console.log("OTP Sent:", data.message);

// //       // Redirect to OTP login page
// //       navigate("/otp-login");

// //     } catch (error) {
// //       console.error("Google Login Error:", error.message);
// //     }
// //   };

// //   const logout = async () => {
// //     try {
// //       await signOut(auth);
// //       setUser(null);
// //       localStorage.removeItem("otp-email");
// //     } catch (error) {
// //       console.error("Logout Error:", error.message);
// //     }
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, loginWithProvider, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);




// // src/context/AuthContext.js
// // import { createContext, useContext, useEffect, useState } from "react";
// // import {
// //   GoogleAuthProvider,
// //   signInWithPopup,
// //   signOut,
// //   onAuthStateChanged
// // } from "firebase/auth";
// // import { auth, db } from "../firebaseConfig";
// // import { doc, setDoc } from "firebase/firestore";

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const provider = new GoogleAuthProvider();

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       setUser(currentUser);
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   const loginWithProvider = async () => {
// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       const user = result.user;

// //       // Save to Firestore
// //       await setDoc(doc(db, "users", user.uid), {
// //         name: user.displayName,
// //         email: user.email,
// //         photoURL: user.photoURL,
// //         uid: user.uid,
// //       });

// //       setUser(user);
// //       return user.email; // ✅ Let caller handle navigation/OTP
// //     } catch (error) {
// //       console.error("Google Login Error:", error.message);
// //       throw error;
// //     }
// //   };

// //   const logout = async () => {
// //     try {
// //       await signOut(auth);
// //       setUser(null);
// //       localStorage.removeItem("otp-email");
// //     } catch (error) {
// //       console.error("Logout Error:", error.message);
// //     }
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, loginWithProvider, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);


// // import { createContext, useContext, useEffect, useState } from "react";
// // import {
// //   GoogleAuthProvider,
// //   signInWithPopup,
// //   signOut,
// //   onAuthStateChanged
// // } from "firebase/auth";
// // import { auth, db } from "../firebaseConfig";
// // import { doc, setDoc } from "firebase/firestore";

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const provider = new GoogleAuthProvider();

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       setUser(currentUser);
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   const loginWithProvider = async () => {
// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       const user = result.user;

// //       // Save to Firestore
// //       await setDoc(doc(db, "users", user.uid), {
// //         name: user.displayName,
// //         email: user.email,
// //         photoURL: user.photoURL,
// //         uid: user.uid
// //       });

// //       setUser(user);
// //       return user.email; // ✅ return only email
// //     } catch (error) {
// //       console.error("Google Login Error:", error.message);
// //       throw error; // ✅ allow caller to catch it
// //     }
// //   };

// //   const logout = async () => {
// //     try {
// //       await signOut(auth);
// //       setUser(null);
// //       localStorage.removeItem("otp-email");
// //     } catch (error) {
// //       console.error("Logout Error:", error.message);
// //     }
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, loginWithProvider, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);



// // AuthContext.jsx

// // import { createContext, useContext, useEffect, useState } from "react";
// // import {
// //   signInWithPopup,
// //   signOut,
// //   onAuthStateChanged
// // } from "firebase/auth";
// // import { auth, db, GoogleAuthProvider } from "../firebaseConfig";
// // import { doc, setDoc } from "firebase/firestore";

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const provider = new GoogleAuthProvider();

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       setUser(currentUser);
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   const loginWithProvider = async () => {
// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       const user = result.user;

// //       // Save user info to Firestore
// //       await setDoc(doc(db, "users", user.uid), {
// //         name: user.displayName,
// //         email: user.email,
// //         photoURL: user.photoURL,
// //         uid: user.uid
// //       });

// //       setUser(user);
// //       return user.email; // only return the email
// //     } catch (error) {
// //       if (error.code === "auth/popup-closed-by-user") {
// //         console.warn("Popup was closed by the user before completing login.");
// //       } else {
// //         console.error("Google Login Error:", error.message);
// //       }
// //       throw error; // forward error to the caller
// //     }
// //   };

// //   const logout = async () => {
// //     try {
// //       await signOut(auth);
// //       setUser(null);
// //       localStorage.removeItem("otp-email");
// //     } catch (error) {
// //       console.error("Logout Error:", error.message);
// //     }
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, loginWithProvider, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);



// // import { createContext, useContext, useEffect, useState } from "react";
// // import {
// //   GoogleAuthProvider,
// //   signInWithPopup,
// //   signOut,
// //   onAuthStateChanged
// // } from "firebase/auth";
// // import { auth, db } from "../firebaseConfig";
// // import { doc, setDoc } from "firebase/firestore";

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const provider = new GoogleAuthProvider();

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       setUser(currentUser);
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   const loginWithProvider = async () => {
// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       const user = result.user;

// //       // Save user info to Firestore
// //       await setDoc(doc(db, "users", user.uid), {
// //         name: user.displayName,
// //         email: user.email,
// //         photoURL: user.photoURL,
// //         uid: user.uid
// //       });

// //       setUser(user);
// //       return user.email; // return only email
// //     } catch (error) {
// //       if (error.code === "auth/popup-closed-by-user") {
// //         console.warn("User closed the login popup.");
// //         return null; // Optional: return null or silently handle
// //       } else {
// //         console.error("Google Login Error:", error.message);
// //         throw error; // Optional: rethrow if caller handles errors
// //       }
// //     }
// //   };

// //   const logout = async () => {
// //     try {
// //       await signOut(auth);
// //       setUser(null);
// //       localStorage.removeItem("otp-email"); // clean up
// //     } catch (error) {
// //       console.error("Logout Error:", error.message);
// //     }
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, loginWithProvider, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);


// // import { createContext, useContext, useEffect, useState } from "react";
// // import {
// //   GoogleAuthProvider,
// //   signInWithPopup,
// //   signOut,
// //   onAuthStateChanged
// // } from "firebase/auth";
// // import { auth, db } from "../firebaseConfig";
// // import { doc, setDoc } from "firebase/firestore";

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const provider = new GoogleAuthProvider();

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       setUser(currentUser);
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   // const loginWithProvider = async () => {
// //   //   try {
// //   //     const result = await signInWithPopup(auth, provider);
// //   //     const user = result.user;

// //   //     if (user) {
// //   //       await setDoc(doc(db, "users", user.uid), {
// //   //         name: user.displayName,
// //   //         email: user.email,
// //   //         photoURL: user.photoURL,
// //   //         uid: user.uid
// //   //       });

// //   //       setUser(user);
// //   //       return user.email; // 📨 for OTP
// //   //     }

// //   //     return null;
// //   //   } catch (error) {
// //   //     if (error.code === "auth/popup-closed-by-user") {
// //   //       console.warn("User closed the login popup.");
// //   //       return null;
// //   //     } else {
// //   //       console.error("Google Login Error:", error.message);
// //   //       throw error;
// //   //     }
// //   //   }
// //   // };

// //   // const loginWithProvider = async () => {
// //   //   try {
// //   //     const result = await signInWithPopup(auth, provider);
// //   //     const user = result.user;
  
// //   //     if (!user || !user.email) {
// //   //       console.warn("Google login returned no email");
// //   //       return null;
// //   //     }
  
// //   //     // Save user info to Firestore
// //   //     await setDoc(doc(db, "users", user.uid), {
// //   //       name: user.displayName || "Unknown",
// //   //       email: user.email,
// //   //       photoURL: user.photoURL || "",
// //   //       uid: user.uid
// //   //     });
  
// //   //     setUser(user);
// //   //     return user.email; // return only email
// //   //   } catch (error) {
// //   //     if (error.code === "auth/popup-closed-by-user") {
// //   //       console.warn("User closed the login popup.");
// //   //       return null;
// //   //     } else {
// //   //       console.error("Google Login Error:", error.message);
// //   //       return null; // <-- return null instead of throwing
// //   //     }
// //   //   }
// //   // };

// //   const loginWithProvider = async () => {
// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       const user = result.user;
  
// //       if (!user || !user.email) {
// //         console.warn("⚠️ No user email returned from Google");
// //         return null;
// //       }
  
// //       await setDoc(doc(db, "users", user.uid), {
// //         name: user.displayName || "Unknown",
// //         email: user.email,
// //         photoURL: user.photoURL || "",
// //         uid: user.uid
// //       });
  
// //       setUser(user);
// //       return user.email;
// //     } catch (error) {
// //       if (error.code === "auth/popup-closed-by-user") {
// //         console.warn("⚠️ User closed the login popup.");
// //         return null;
// //       }
// //       console.error("❌ Google Login Error:", error.message);
// //       return null;
// //     }
// //   };
  
  

// //   const logout = async () => {
// //     try {
// //       await signOut(auth);
// //       setUser(null);
// //       localStorage.removeItem("otp-email");
// //     } catch (error) {
// //       console.error("Logout Error:", error.message);
// //     }
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, loginWithProvider, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);



// // import { createContext, useContext, useEffect, useState } from "react";
// // import {
// //   GoogleAuthProvider,
// //   signInWithPopup,
// //   signOut,
// //   onAuthStateChanged
// // } from "firebase/auth";
// // import { auth, db } from "../firebaseConfig";
// // import { doc, setDoc } from "firebase/firestore";

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const provider = new GoogleAuthProvider();

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       setUser(currentUser);
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   const loginWithProvider = async () => {
// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       const user = result.user;

// //       if (!user || !user.email) {
// //         console.warn("⚠️ Google login succeeded but email is missing.");
// //         return null;
// //       }

// //       // Save user info to Firestore
// //       await setDoc(doc(db, "users", user.uid), {
// //         name: user.displayName || "Unknown",
// //         email: user.email,
// //         photoURL: user.photoURL || "",
// //         uid: user.uid,
// //         timestamp: Date.now()
// //       });

// //       setUser(user);
// //       console.log("✅ Google login successful:", user.email);
// //       return user.email;
// //     } catch (error) {
// //       if (error.code === "auth/popup-closed-by-user") {
// //         console.warn("⚠️ User closed the Google login popup.");
// //       } else {
// //         console.error("❌ Google login failed:", error.message);
// //       }
// //       return null;
// //     }
// //   };

// //   const logout = async () => {
// //     try {
// //       await signOut(auth);
// //       setUser(null);
// //       localStorage.removeItem("otp-email");
// //       console.log("👋 User logged out");
// //     } catch (error) {
// //       console.error("Logout Error:", error.message);
// //     }
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, loginWithProvider, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);




// // import { createContext, useContext, useEffect, useState } from "react";
// // import {
// //   GoogleAuthProvider,
// //   signInWithPopup,
// //   signOut,
// //   onAuthStateChanged,
// // } from "firebase/auth";
// // import { auth, db } from "../firebaseConfig";
// // import { doc, setDoc } from "firebase/firestore";

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const provider = new GoogleAuthProvider();

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       setUser(currentUser);
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   // const loginWithProvider = async () => {
// //   //   try {
// //   //     const result = await signInWithPopup(auth, provider);
// //   //     const user = result.user;

// //   //     if (!user || !user.email) {
// //   //       console.warn("⚠️ Google login succeeded but no email found.");
// //   //       return null;
// //   //     }

// //   //     // Save user data to Firestore
// //   //     await setDoc(doc(db, "users", user.uid), {
// //   //       uid: user.uid,
// //   //       name: user.displayName || "No Name",
// //   //       email: user.email,
// //   //       photoURL: user.photoURL || "",
// //   //       timestamp: Date.now(),
// //   //     });

// //   //     setUser(user);
// //   //     console.log("✅ Google sign-in successful:", user.email);
// //   //     return user.email;
// //   //   } catch (error) {
// //   //     if (error.code === "auth/popup-closed-by-user") {
// //   //       console.warn("⚠️ Google login popup was closed by the user.");
// //   //     } else if (error.code === "auth/cancelled-popup-request") {
// //   //       console.warn("⚠️ Popup request was canceled.");
// //   //     } else {
// //   //       console.error("❌ Google sign-in failed:", error.message);
// //   //     }
// //   //     return null;
// //   //   }
// //   // };

// //   const loginWithProvider = async () => {
// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       const user = result.user;
  
// //       // Save user info to Firestore if needed
// //       const userRef = doc(db, "users", user.uid);
// //       await setDoc(userRef, {
// //         email: user.email,
// //         name: user.displayName,
// //         // photoURL: user.photoURL,
// //       }, { merge: true });
  
// //       return user.email; // ✅ Return the email to be used for OTP
// //     } catch (error) {
// //       if (error.code === "auth/popup-closed-by-user") {
// //         console.warn("⚠️ User closed the popup before logging in.");
// //         return null; // 🔁 Handle this in the calling function
// //       } else {
// //         console.error("Google Login Error:", error);
// //         throw error;
// //       }
// //     }
// //   };
  
  

// //   const logout = async () => {
// //     try {
// //       await signOut(auth);
// //       setUser(null);
// //       localStorage.removeItem("otp-email");
// //       console.log("👋 Logged out successfully.");
// //     } catch (error) {
// //       console.error("Logout error:", error.message);
// //     }
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, loginWithProvider, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);


// // import { createContext, useContext, useEffect, useState } from "react";
// // import axios from "axios";

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);

// //   // Simulate login with Google Provider - now handled by backend
// //   const loginWithProvider = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:5000/api/auth/google-login-url");
// //       window.location.href = response.data.url; // Redirect to backend for Google login
// //     } catch (error) {
// //       console.error("Google login initiation failed:", error);
// //     }
// //   };

// //   const fetchUser = async () => {
// //     try {
// //       const res = await axios.get("http://localhost:5000/api/auth/me", {
// //         withCredentials: true,
// //       });
// //       setUser(res.data.user);
// //     } catch (error) {
// //       console.log("Not logged in");
// //       setUser(null);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchUser();
// //   }, []);

// //   const logout = async () => {
// //     try {
// //       await axios.post("http://localhost:5000/api/auth/logout", {}, {
// //         withCredentials: true,
// //       });
// //       setUser(null);
// //       localStorage.removeItem("otp-email");
// //       console.log("👋 Logged out successfully.");
// //     } catch (error) {
// //       console.error("Logout error:", error.message);
// //     }
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, loginWithProvider, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);



// // import { createContext, useContext, useEffect, useState } from "react";
// // import axios from "axios";

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);

// //   const loginWithProvider = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:5000/api/auth/google-login-url", {
// //         withCredentials: true, // Add this for future safety (cookies/session)
// //       });
// //       if (response.data?.url) {
// //         window.location.href = response.data.url; // Safe redirect
// //       } else {
// //         console.error("No Google login URL received from backend.");
// //       }
// //     } catch (error) {
// //       console.error("Google login initiation failed:", error);
// //     }
// //   };

// //   const fetchUser = async () => {
// //     try {
// //       const res = await axios.get("http://localhost:5000/api/auth/me", {
// //         withCredentials: true,
// //       });
// //       setUser(res.data.user);
// //     } catch (error) {
// //       console.log("Not logged in");
// //       setUser(null);
// //     }
// //   };

// //   const logout = async () => {
// //     try {
// //       await axios.post("http://localhost:5000/api/auth/logout", {}, {
// //         withCredentials: true,
// //       });
// //       setUser(null);
// //       localStorage.removeItem("otp-email");
// //       console.log("👋 Logged out successfully.");
// //     } catch (error) {
// //       console.error("Logout error:", error.message);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchUser();
// //   }, []);

// //   return (
// //     <AuthContext.Provider value={{ user, loginWithProvider, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);



// // import { createContext, useContext, useEffect, useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from 'react-router-dom'; // Correct import for react-router-dom v6+

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const navigate = useNavigate(); // Use useNavigate instead of useHistory

// //   const loginWithProvider = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:5000/api/auth/google-login-url", {
// //         withCredentials: true, // Add this for future safety (cookies/session)
// //       });
// //       if (response.data?.url) {
// //         window.location.href = response.data.url; // Safe redirect
// //       } else {
// //         console.error("No Google login URL received from backend.");
// //       }
// //     } catch (error) {
// //       console.error("Google login initiation failed:", error);
// //     }
// //   };

// //   const fetchUser = async () => {
// //     try {
// //       const res = await axios.get("http://localhost:5000/api/auth/me", {
// //         withCredentials: true,
// //       });
// //       setUser(res.data.user);
// //     } catch (error) {
// //       console.log("Not logged in");
// //       setUser(null);
// //     }
// //   };

// //   const logout = async () => {
// //     try {
// //       await axios.post("http://localhost:5000/api/auth/logout", {}, {
// //         withCredentials: true,
// //       });
// //       setUser(null);
// //       localStorage.removeItem("otp-email");
// //       console.log("👋 Logged out successfully.");
// //     } catch (error) {
// //       console.error("Logout error:", error.message);
// //     }
// //   };

// //   // Google login and OTP flow
// //   const handleGoogleLogin = async () => {
// //     try {
// //       const provider = new firebase.auth.GoogleAuthProvider();
// //       const result = await firebase.auth().signInWithPopup(provider);
// //       const user = result.user;

// //       if (user) {
// //         // Send OTP to the user's email
// //         await axios.post("http://localhost:5000/api/auth/send-otp", { email: user.email });

// //         // Store email in localStorage for OTP verification page
// //         localStorage.setItem("otp-email", user.email);

// //         // Redirect to OTP page
// //         navigate("/otp-login"); // Use navigate instead of history.push
// //       }
// //     } catch (error) {
// //       console.error("Google login failed:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchUser();
// //   }, []);

// //   return (
// //     <AuthContext.Provider value={{ user, loginWithProvider, logout, handleGoogleLogin }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);
// import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate(); // useNavigate works because Router is already wrapping App

//   const loginWithProvider = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/auth/google-login-url", {
//         withCredentials: true,
//       });
//       if (response.data?.url) {
//         window.location.href = response.data.url; // Google login redirect
//       } else {
//         console.error("No Google login URL received from backend.");
//       }
//     } catch (error) {
//       console.error("Google login initiation failed:", error);
//     }
//   };

//   const fetchUser = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/auth/me", {
//         withCredentials: true,
//       });
//       setUser(res.data.user);
//     } catch (error) {
//       console.log("Not logged in");
//       setUser(null);
//     }
//   };

//   const logout = async () => {
//     try {
//       await axios.post("http://localhost:5000/api/auth/logout", {}, {
//         withCredentials: true,
//       });
//       setUser(null);
//       localStorage.removeItem("otp-email");
//       console.log("👋 Logged out successfully.");
//       navigate("/login"); // Navigate to login after logout
//     } catch (error) {
//       console.error("Logout error:", error.message);
//     }
//   };

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, loginWithProvider, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);



// // import React, { createContext, useContext, useEffect, useState } from "react";
// // import {
// //   getAuth,
// //   GoogleAuthProvider,
// //   signInWithPopup,
// //   setPersistence,
// //   browserSessionPersistence,
// //   signOut,
// //   onAuthStateChanged,
// // } from "firebase/auth";
// // import { app } from "../firebaseConfig";

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const auth = getAuth(app);
// //   const provider = new GoogleAuthProvider();

// //   const [currentUser, setCurrentUser] = useState(null);

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (user) => {
// //       setCurrentUser(user);
// //     });
// //     return () => unsubscribe();
// //   }, [auth]);

// //   const loginWithProvider = async () => {
// //     try {
// //       await setPersistence(auth, browserSessionPersistence);
// //       const result = await signInWithPopup(auth, provider);
// //       const user = result.user;
// //       return user.email;
// //     } catch (error) {
// //       console.error("Google Login Error:", error.message);
// //       throw error;
// //     }
// //   };

// //   const logout = async () => {
// //     await signOut(auth);
// //     setCurrentUser(null);
// //   };

// //   return (
// //     <AuthContext.Provider value={{ currentUser, loginWithProvider, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);



// // src/context/AuthContext.jsx
// // import React, { createContext, useContext, useEffect, useState } from "react";
// // import {
// //   GoogleAuthProvider,
// //   signInWithPopup,
// //   onAuthStateChanged,
// //   setPersistence,
// //   browserLocalPersistence,
// //   getAuth,
// //   signOut,
// // } from "firebase/auth";
// // import { auth } from "../firebaseConfig";
// // import { doc, setDoc } from "firebase/firestore";
// // import { db } from "../firebaseConfig";

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
// //       setUser(currentUser);
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   const loginWithProvider = async () => {
// //     try {
// //       await setPersistence(auth, browserLocalPersistence);
// //       const provider = new GoogleAuthProvider();
// //       const result = await signInWithPopup(auth, provider);
// //       const user = result.user;

// //       // Save to Firestore
// //       await setDoc(doc(db, "users", user.uid), {
// //         uid: user.uid,
// //         email: user.email,
// //         name: user.displayName,
// //       }, { merge: true });

// //       setUser(user);
// //       return user.email;
// //     } catch (error) {
// //       console.error("Google Login Error:", error);
// //       throw error;
// //     }
// //   };

// //   const logout = async () => {
// //     await signOut(auth);
// //     setUser(null);
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, loginWithProvider, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);




// // import React, { createContext, useContext, useEffect, useState } from "react";
// // import {
// //   getAuth,
// //   GoogleAuthProvider,
// //   signInWithRedirect,
// //   getRedirectResult,
// //   signOut,
// // } from "firebase/auth";
// // import { auth, db } from "../firebaseConfig";
// // import { doc, setDoc, getDoc } from "firebase/firestore";

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);

// //   const loginWithProvider = async () => {
// //     const provider = new GoogleAuthProvider();
// //     await signInWithRedirect(auth, provider);
// //   };

// //   const logout = async () => {
// //     await signOut(auth);
// //     setUser(null);
// //   };

// //   useEffect(() => {
// //     const fetchUser = async () => {
// //       try {
// //         const result = await getRedirectResult(auth);
// //         if (result && result.user) {
// //           const { email, displayName, uid } = result.user;
// //           const userDoc = doc(db, "users", uid);
// //           const docSnap = await getDoc(userDoc);

// //           if (!docSnap.exists()) {
// //             await setDoc(userDoc, { email, displayName });
// //           }

// //           setUser({ email, displayName, uid });
// //         }
// //       } catch (error) {
// //         console.error("Redirect login error:", error.message);
// //       }
// //     };

// //     fetchUser();
// //   }, []);

// //   return (
// //     <AuthContext.Provider value={{ user, loginWithProvider, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);


// // AuthContext.jsx

// // import React, { createContext, useContext, useEffect, useState } from "react";
// // import {
// //   getAuth,
// //   signInWithRedirect,
// //   getRedirectResult,
// //   GoogleAuthProvider,
// //   signOut
// // } from "firebase/auth";
// // import { auth, db } from "../firebaseConfig";
// // import { doc, setDoc, getDoc } from "firebase/firestore";

// // const AuthContext = createContext();

// // export const useAuth = () => useContext(AuthContext);

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);

// //   // Google sign-in with redirect
// //   const loginWithProvider = async () => {
// //     const provider = new GoogleAuthProvider();
// //     await signInWithRedirect(auth, provider);
// //   };

// //   // Handle result from redirect
// //   useEffect(() => {
// //     getRedirectResult(auth)
// //       .then(async (result) => {
// //         if (result && result.user) {
// //           const userData = {
// //             uid: result.user.uid,
// //             name: result.user.displayName,
// //             email: result.user.email,
// //           };
// //           setUser(userData);

// //           // Save user to Firestore if not exists
// //           const userRef = doc(db, "users", result.user.uid);
// //           const docSnap = await getDoc(userRef);
// //           if (!docSnap.exists()) {
// //             await setDoc(userRef, userData);
// //           }

// //           // Save email for OTP
// //           localStorage.setItem("otp-email", userData.email);
// //           window.location.href = "/verify-otp"; // Navigate manually
// //         }
// //       })
// //       .catch((err) => {
// //         console.error("Redirect login error:", err);
// //       });
// //   }, []);

// //   const logout = () => signOut(auth);

// //   return (
// //     <AuthContext.Provider value={{ user, loginWithProvider, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };


// // import React, { createContext, useContext, useEffect, useState } from "react";
// // import {
// //     getAuth,
// //     GoogleAuthProvider,
// //     signInWithRedirect,
// //     getRedirectResult,
// //     signOut,
// // } from "firebase/auth";
// // import { auth, db } from "../firebaseConfig";
// // import { doc, setDoc, getDoc } from "firebase/firestore";
// // import { useNavigate } from "react-router-dom";

// // const AuthContext = createContext();
// // export const AuthProvider = ({ children }) => {
// //     const [user, setUser] = useState(null);
// //    // useNavigate called inside AuthProvider
// //    const navigate = useNavigate();
// //     const loginWithProvider = async () => {
// //         const provider = new GoogleAuthProvider();
// //         await signInWithRedirect(auth, provider);
// //     };

// //     const logout = async () => {
// //         await signOut(auth);
// //         setUser(null);
// //         navigate("/login");
// //     };

// //     useEffect(() => {
// //         const fetchUser = async () => {
// //             try {
// //                 const result = await getRedirectResult(auth);
// //                 if (result && result.user) {
// //                     const { email, displayName, uid } = result.user;
// //                     const userDoc = doc(db, "users", uid);
// //                     const docSnap = await getDoc(userDoc);

// //                     if (!docSnap.exists()) {
// //                         await setDoc(userDoc, { email, displayName });
// //                     }

// //                     setUser({ email, displayName, uid });
// //                     navigate("/");
// //                 } else {
// //                     auth.onAuthStateChanged((authUser) => {
// //                         if (authUser) {
// //                             const { email, displayName, uid } = authUser;
// //                             setUser({ email, displayName, uid });
// //                             navigate("/dashboard");
// //                         }
// //                     });
// //                 }
// //             } catch (error) {
// //                 console.error("Redirect login error:", error.message);
// //             }
// //         };

// //         fetchUser();
// //     }, [navigate]); // navigate is in the dependency array

// //     return (
// //         <AuthContext.Provider value={{ user, loginWithProvider, logout }}>
// //             {children}
// //         </AuthContext.Provider>
// //     );
// // };

// // export const useAuth = () => useContext(AuthContext);


// // import React, { createContext, useContext, useEffect, useState } from "react";
// // import {
// //     getAuth,
// //     GoogleAuthProvider,
// //     signInWithRedirect,
// //     getRedirectResult,
// //     signOut,
// // } from "firebase/auth";
// // import { auth, db } from "../firebaseConfig";
// // import { doc, setDoc, getDoc } from "firebase/firestore";

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children, navigate }) => { // Receive navigate as a prop
// //     const [user, setUser] = useState(null);

// //     const loginWithProvider = async () => {
// //         const provider = new GoogleAuthProvider();
// //         try {
// //             await signInWithRedirect(auth, provider);
// //         } catch (error) {
// //             console.error("Google Sign-in Error:", error);
// //             // Handle error appropriately
// //         }
// //     };

// //     const logout = async () => {
// //         try {
// //             await signOut(auth);
// //             setUser(null);
// //             if (navigate) { // Check if navigate prop is received
// //                 navigate("/login");
// //             } else {
// //                 console.warn("Navigate function not available in AuthProvider for logout.");
// //             }
// //         } catch (error) {
// //             console.error("Logout Error:", error);
// //             // Handle error appropriately
// //         }
// //     };

// //     useEffect(() => {
// //         const fetchUser = async () => {
// //             try {
// //                 const result = await getRedirectResult(auth);
// //                 if (result && result.user) {
// //                     const { email, displayName, uid } = result.user;
// //                     const userDoc = doc(db, "users", uid);
// //                     const docSnap = await getDoc(userDoc);

// //                     if (!docSnap.exists()) {
// //                         await setDoc(userDoc, { email, displayName });
// //                     }

// //                     setUser({ email, displayName, uid });
// //                     if (navigate) { // Check if navigate prop is received
// //                         navigate("/dashboard");
// //                     } else {
// //                         console.warn("Navigate function not available in AuthProvider after login.");
// //                     }
// //                 } else {
// //                     auth.onAuthStateChanged((authUser) => {
// //                         if (authUser) {
// //                             const { email, displayName, uid } = authUser;
// //                             setUser({ email, displayName, uid });
// //                             if (navigate) { // Check if navigate prop is received
// //                                 navigate("/dashboard");
// //                             } else {
// //                                 console.warn("Navigate function not available in AuthProvider after auth state change.");
// //                             }
// //                         }
// //                     });
// //                 }
// //             } catch (error) {
// //                 console.error("Redirect Result Error:", error);
// //             }
// //         };

// //         fetchUser();
// //     }, [navigate]); // Still include navigate in the dependency array

// //     return (
// //         <AuthContext.Provider value={{ user, loginWithProvider, logout }}>
// //             {children}
// //         </AuthContext.Provider>
// //     );
// // };

// // export const useAuth = () => useContext(AuthContext);

// // context/AuthContext.jsx
// // import { createContext, useContext, useEffect, useState } from "react";
// // import {
// //   GoogleAuthProvider,
// //   signInWithPopup,
// //   signOut,
// //   onAuthStateChanged
// // } from "firebase/auth";
// // import { auth, db } from "../firebaseConfig";
// // import { doc, setDoc } from "firebase/firestore";
// // import { useNavigate } from "react-router-dom";

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const navigate = useNavigate();
// //   const provider = new GoogleAuthProvider();

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       setUser(currentUser);
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   const loginWithProvider = async () => {
// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       const user = result.user;

// //       if (!user || !user.email) {
// //         console.warn("⚠️ Google login succeeded but email is missing.");
// //         return null;
// //       }

// //       // Save user info to Firestore
// //       await setDoc(doc(db, "users", user.uid), {
// //         name: user.displayName || "Unknown",
// //         email: user.email,
// //         photoURL: user.photoURL || "",
// //         uid: user.uid,
// //         timestamp: Date.now()
// //       });

// //       setUser(user);
// //       console.log("✅ Google login successful:", user.email);

// //       // ✅ Redirect to OTP page
// //       navigate("/otp-login");

// //       return user.email;
// //     } catch (error) {
// //       if (error.code === "auth/popup-closed-by-user") {
// //         console.warn("⚠️ User closed the Google login popup.");
// //       } else {
// //         console.error("❌ Google login failed:", error.message);
// //       }
// //       return null;
// //     }
// //   };

// //   const logout = async () => {
// //     try {
// //       await signOut(auth);
// //       setUser(null);
// //       localStorage.removeItem("otp-email");
// //       console.log("👋 User logged out");
// //     } catch (error) {
// //       console.error("Logout Error:", error.message);
// //     }
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, loginWithProvider, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);
