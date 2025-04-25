// import React from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Button } from "@/components/ui/button";
// import { useAuth } from '@/context/AuthContext';
// import { LogOut, User, Settings } from 'lucide-react';

// const Header = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { authState, logout } = useAuth();

//   // Determine if a link is active
//   const isActive = (path) => {
//     return location.pathname === path;
//   };

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   // Safety check for authState and authState.user
//   const userName = authState?.user?.name || 'User'; // Avoid error if authState is undefined

//   return (
//     <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-16 items-center justify-between">
//         <div className="flex items-center gap-2 mr-4">
//           <Link to="/" className="flex items-center">
//             <span className="text-xl font-bold ">VoiceQuest</span>
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

//           {authState?.user ? (
//             <div className="flex items-center gap-2">
//               <Button 
//                 variant="ghost"
//                 size="sm"
//                 className="text-primary"
//               >
//                 <User className="w-4 h-4 mr-1" />
//                 <span className="hidden sm:inline">{userName}</span>
//               </Button>
              
//               <Button 
//                 variant="outline"
//                 size="sm"
//                 className="flex items-center gap-1 text-red-500 hover:bg-red-50/20 hover:text-red-600"
//                 onClick={handleLogout}
//               >
//                 <LogOut className="w-4 h-4" />
//                 <span className="hidden sm:inline">Logout</span>
//               </Button>
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




import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/context/AuthContext';
import { LogOut, User } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Determine if a link is active
  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Determine display name, default to "User"
  const userName = user?.displayName || user?.email || 'User';

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

          {user ? (
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost"
                size="sm"
                className="text-primary"
              >
                <User className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">{userName}</span>
              </Button>
              
              <Button 
                variant="outline"
                size="sm"
                className="flex items-center gap-1 text-red-500 hover:bg-red-50/20 hover:text-red-600"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
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
