// import { createContext, useEffect, useState } from "react";
// import axios from 'axios'
// import { toast } from "react-toastify";

// export const AppContext = createContext()

// export const AppContextProvider = (props) => {

//     axios.defaults.withCredentials = true

//     const backendUrl = "http://localhost:5000"
//     const [isLogin, setIsLogin] = useState(false)
//     const [userData, setUserData] = useState(false)


//     //+++++++++Create a fun that give the user data +++++++++
//     const getUserData = async()=>{
//         try {
//             const {data} = await axios.get(backendUrl + '/api/user/data')
//             data.success ? setUserData(data.userData) : toast.error(data.message)
//         } catch (error) {
//             toast.error(error.message)
//         }
//     }

//     const getAuthStatus = async()=>{
//         try {
//             const {data} = await axios.get(backendUrl + '/api/auth/is-auth')
//             if(data.success){
//                 setIsLogin(true)
//                 getUserData()
//             }
//         }catch(error) {
//             toast.error(error.message)
//         }
//     }

//     useEffect(()=>{
//         getAuthStatus()
//     }, [])
//     //+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//     const value ={
//         backendUrl, 
//         isLogin, 
//         setIsLogin, 
//         userData,
//         setUserData, 
//         getUserData
//     }

//     return(
//         <AppContext.Provider value={value}>
//             {props.children}
//         </AppContext.Provider>
//     )
// }


import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  axios.defaults.withCredentials = true;

  const backendUrl = "http://localhost:5000";
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(false);

  // Create a function to fetch user data
  const getUserData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/user/data');
      if (data.success) {
        // Ensure we have all required fields
        const userData = {
          ...data.userData,
          id: data.userData._id || data.userData.id, // MongoDB _id or custom id
          email: data.userData.email || '',
          name: data.userData.name || 'Anonymous',
          isAccountVerified: data.userData.isAccountVerified || false
        };
        setUserData(userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Check if the user is authenticated
  const getAuthStatus = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/auth/is-auth');
      if (data.success) {
        setIsLogin(true);
        getUserData();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getAuthStatus();
  }, []);

  const value = {
    backendUrl,
    isLogin,
    setIsLogin,
    userData,
    setUserData,
    getUserData,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

// Custom hook to access AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};


// import React, { createContext, useState, useContext, useEffect } from 'react';

// // Create the context for app-wide data
// const AppContext = createContext();

// export const AppContextProvider = ({ children }) => {
//   const backendUrl = "http://localhost:5000";
//   const [userData, setUserData] = useState(null);
//   const [isLogin, setIsLogin] = useState(false);

//   // On initial load, check if user data exists in localStorage
//   useEffect(() => {
//     const savedUserData = localStorage.getItem('userData');
//     if (savedUserData) {
//       setUserData(JSON.parse(savedUserData));
//       setIsLogin(true);
//     }
//   }, []);

//   // Login function to update context and localStorage
//   const login = (user) => {
//     setUserData(user);
//     setIsLogin(true);
//     localStorage.setItem('userData', JSON.stringify(user));
//   };

//   // Logout function to clear context and localStorage
//   const logout = () => {
//     setUserData(null);
//     setIsLogin(false);
//     localStorage.removeItem('userData');
//   };

//   return (
//     <AppContext.Provider value={{ userData, isLogin, login, logout }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = () => useContext(AppContext);
// export { AppContext };