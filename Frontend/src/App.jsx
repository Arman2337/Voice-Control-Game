
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";
// import QuizGame from "./pages/QuizGame";
// import MemoryGame from "./pages/MemoryGame";
// import { AuthProvider } from "./context/AuthContext";
// import Header from "./components/Header";
// import "./index.css";
// import Leaderboard from "./pages/Leaderboard";
// import OtpLogin from "./pages/OtpLogin"; 
// /* Add this CSS to your index.css or a global CSS file to ensure the app takes full width */


// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/quiz" element={<QuizGame />} />
//           <Route path="/memory" element={<MemoryGame />} />
//           <Route path="/leaderboard" element={<Leaderboard />} />
//           <Route path="/otp-login" element={<OtpLogin />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;





import { BrowserRouter as Router, Routes, Route , useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import QuizGame from "./pages/QuizGame";
import MemoryGame from "./pages/MemoryGame";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import "./index.css";
import Leaderboard from "./pages/Leaderboard";
import OtpLogin from "./pages/OtpLogin";

function App() {
  return (
    <Router>
      <AuthProvider >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quiz" element={<QuizGame />} />
          <Route path="/memory" element={<MemoryGame />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/otp-login" element={<OtpLogin />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import { ThemeProvider } from './components/ui/theme-provider';
// import { AuthProvider } from './context/AuthContext';
// // import { Toaster } from './components/ui/sonner';
// import QuizGame from './pages/QuizGame';
// import Login from './pages/Login';
// import Register from './pages/Signup';
// // import VerifyEmail from '../pages/auth/VerifyEmail';
// // import VerifyOTP from '../pages/auth/VerifyOTP';

// function App() {
//   return (
//     <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
//       <AuthProvider>
//         <Router>
//           <Routes>
//             <Route path="/" element={<QuizGame />} />
//             <Route path="/auth/login" element={<Login />} />
//             <Route path="/auth/register" element={<Register />} />
//             <Route path="/auth/verify-email" element={<VerifyEmail />} />
//             <Route path="/auth/verify-otp" element={<VerifyOTP />} />
//           </Routes>
//         </Router>
//         <Toaster />
//       </AuthProvider>
//     // </ThemeProvider>
//   );
// }

// export default App;