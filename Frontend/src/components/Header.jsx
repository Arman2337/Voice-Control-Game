// import React, { useState, useContext } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Button } from "@/components/ui/button";
// import { useAuth } from '@/context/AuthContext';
// import { AppContext } from '../context/AppContext.jsx'
// import { toast } from 'react-toastify'
// import axios from 'axios'

// const Header = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { user, logout } = useAuth();
//   const { userData, isLogin, backendUrl, setIsLogin, setUserData } = useContext(AppContext);

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 🛠️ Control dropdown manually

//   const isActive = (path) => location.pathname === path;

//   const logOut = async () => {
//     try {
//       axios.defaults.withCredentials = true
//       const { data } = await axios.post(backendUrl + '/api/auth/logout')
//       if (data.success) {
//         setIsLogin(false)
//         setUserData(false)
//         navigate('/')
//       }
//     } catch (error) {
//       toast.error(error.message)
//     }
//   }

//   const sendVerificationOpt = async () => {
//     try {
//       axios.defaults.withCredentials = true
//       const { data } = await axios.post(backendUrl + '/api/auth/send-verify-otp')
//       if (data.success) {
//         navigate('/email-verify')
//         toast.success(data.message)
//       } else {
//         toast.error(data.message)
//       }
//     } catch (error) {
//       toast.error(error.message)
//     }
//   }

//   const userName = userData?.username || userData?.email || 'User';

//   return (
//     <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-16 items-center justify-between">
//         <div className="flex items-center gap-2 mr-4">
//           <Link to="/" className="flex items-center">
//             <span className="text-xl font-bold">VoiceQuest</span>
//           </Link>
//         </div>

//         <nav className="flex items-center space-x-1 md:space-x-2">
//           <Link to="/">
//             <Button variant={isActive('/') ? 'default' : 'ghost'}>
//               Home
//             </Button>
//           </Link>
//           <Link to="/quiz">
//             <Button variant={isActive('/quiz') ? 'default' : 'ghost'}>
//               Quiz
//             </Button>
//           </Link>
//           <Link to="/memory">
//             <Button variant={isActive('/memory') ? 'default' : 'ghost'}>
//               Memory
//             </Button>
//           </Link>
//           <Link to="/leaderboard">
//             <Button variant={isActive('/leaderboard') ? 'default' : 'ghost'}>
//               Leaderboard
//             </Button>
//           </Link>

//           {isLogin && userData ? (
//             <div 
//               className="relative" 
//               onMouseEnter={() => setIsDropdownOpen(true)}
//               onMouseLeave={() => setIsDropdownOpen(false)}
//             >
//               {/* Avatar */}
//               <div className="flex items-center justify-center rounded-full bg-black text-white w-8 h-8 cursor-pointer">
//                 {userData?.username?.[0]?.toUpperCase() || userData?.email?.[0]?.toUpperCase() || 'U'}
//               </div>

//               {/* Dropdown */}
//               {isDropdownOpen && (
//                 <div className="absolute top-full right-0 mt-2 w-40 bg-white shadow-md rounded-md z-10">
//                   <ul className="text-sm text-gray-700">
//                     {!userData.isAccountVerified && (
//                       <li 
//                         onClick={sendVerificationOpt} 
//                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                       >
//                         Verify Email
//                       </li>
//                     )}
//                     <li 
//                       onClick={logOut} 
//                       className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                     >
//                       Logout
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <Link to="/login">
//               <Button 
//                 variant={isActive('/login') ? 'default' : 'outline'} 
//                 size="sm"
//                 className="ml-2"
//               >
//                 Login
//               </Button>
//             </Link>
//           )}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
// import { useAuth } from '@/context/AuthContext';
import { AppContext } from '../context/AppContext.jsx'
import { toast } from 'react-toastify'
import axios from 'axios'

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const { user, logout } = useAuth();
  const { userData, backendUrl, setIsLogin, setUserData } = useContext(AppContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 🛠️ Control dropdown manually

  const isActive = (path) => location.pathname === path;

  const logOut = async () => {
    try {
      axios.defaults.withCredentials = true
      const { data } = await axios.post(backendUrl + '/api/auth/logout')
      if (data.success) {
        setIsLogin(false)
        setUserData(false)
        navigate('/')
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const sendVerificationOpt = async () => {
    try {
      axios.defaults.withCredentials = true
      const { data } = await axios.post(backendUrl + '/api/auth/send-verify-otp')
      if (data.success) {
        navigate('/email-verify')
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 mr-4">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold">VoiceQuest</span>
          </Link>
        </div>

        <nav className="flex items-center space-x-1 md:space-x-2">
          <Link to="/">
            <Button variant={isActive('/') ? 'default' : 'ghost'}>
              Home
            </Button>
          </Link>
          <Link to="/quiz">
            <Button variant={isActive('/quiz') ? 'default' : 'ghost'}>
              Quiz
            </Button>
          </Link>
          <Link to="/memory">
            <Button variant={isActive('/memory') ? 'default' : 'ghost'}>
              Memory
            </Button>
          </Link>
          <Link to="/leaderboard">
            <Button variant={isActive('/leaderboard') ? 'default' : 'ghost'}>
              Leaderboard
            </Button>
          </Link>

          {userData ? (
            <div 
              className="relative" 
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              {/* Avatar */}
              <div className="flex items-center justify-center rounded-full bg-black text-white w-8 h-8 cursor-pointer">
                {userData?.name?.[0]?.toUpperCase() || 'U'}
              </div>

              {/* Dropdown */}
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white shadow-md rounded-md z-10">
                  <ul className="text-sm text-gray-700">
                    {!userData.isAccountVerified && (
                      <li 
                        onClick={sendVerificationOpt} 
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Verify Email
                      </li>
                    )}
                    <li 
                      onClick={logOut} 
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <Button 
                variant={isActive('/login') ? 'default' : 'outline'} 
                size="sm"
                className="ml-2"
              >
                Login
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
