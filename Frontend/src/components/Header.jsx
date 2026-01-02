import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { AppContext } from '../context/AppContext.jsx';
import { toast } from 'sonner';
import api from '@/lib/api';
import { LogOut, User, Menu, X, CheckCircle } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userData, setIsLogin, setUserData } = useContext(AppContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const logOut = async () => {
    try {
      const { data } = await api.post('/auth/logout');
      if (data.success) {
        setIsLogin(false);
        setUserData(false);
        navigate('/');
        toast.success("Logged out successfully");
      }
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  const sendVerificationOpt = async () => {
    try {
      const { data } = await api.post('/auth/send-verify-otp');
      if (data.success) {
        navigate('/email-verify');
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#020817]/80 backdrop-blur-md supports-[backdrop-filter]:bg-[#020817]/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white">
            VQ
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 hidden sm:block">
            VoiceQuest
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4">
          {['/', '/quiz', '/memory', '/leaderboard'].map((path) => {
            const label = path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
            return (
              <Link to={path} key={path}>
                <Button
                  variant="ghost"
                  className={`text-sm font-medium transition-colors hover:text-primary ${isActive(path) ? 'text-primary bg-primary/10' : 'text-muted-foreground'}`}
                >
                  {label}
                </Button>
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          {userData ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-9 w-9 border border-border">
                    <AvatarImage src={userData.photoURL} alt={userData.name} />
                    <AvatarFallback className="bg-primary/20 text-primary">
                      {userData?.name?.[0]?.toUpperCase() || 'U'}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{userData.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {userData.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {!userData.isAccountVerified && (
                  <DropdownMenuItem onClick={sendVerificationOpt} className="text-yellow-500 cursor-pointer">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Verify Email
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={logOut} className="text-red-500 cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="ghost" size="sm">Login</Button>
              </Link>
              <Link to="/signup">
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
