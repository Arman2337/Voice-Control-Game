// import React from "react";
// import { useAuth } from "../context/AuthContext";

// const Navbar = () => {
//   const { currentUser, logOut } = useAuth();

//   return (
//     <nav className="p-4 bg-blue-500 text-white flex justify-between">
//       <h1>Voice Quest Galaxy</h1>
//       {currentUser && (
//         <button onClick={logOut} className="bg-red-500 px-4 py-2 rounded">
//           Logout
//         </button>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useContext } from 'react'
import {assets} from '../assets/assets.js'
import {useNavigate} from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx'
import { toast } from 'react-toastify'
import axios from 'axios'
const Navbar = () => {

  const navigate = useNavigate()
  const {userData, backendUrl, setIsLogin, setUserData} = useContext(AppContext)


  const logOut = async()=>{
    try {
        axios.defaults.withCredentials = true
        const {data} = await axios.post(backendUrl + '/api/auth/logout')
        if(data.success){
          setIsLogin(false)
          setUserData(false)
          navigate('/')
        }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const sendVerificationOpt = async()=>{
    try {
      axios.defaults.withCredentials = true
      const {data} = await axios.post( backendUrl + '/api/auth/send-verify-otp')
      if(data.success){
        navigate('/email-verify')
        toast.success(data.message)
      }else{
        toast.error(data.message)
      }
    }catch(error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='w-full flex justify-between items-center p-4 sm:p-6 sm:px-24
    absolute top-0'>
      <img className='w-28 sm:w-32 cursor-pointer' src={assets.logo}/>

      {userData ? 
        <div className='flex items-center justify-center rounded-full bg-black text-white relative group w-8 h-8 cursor-pointer'>
          {userData.name[0].toUpperCase()}
          <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black pt-10 rounded'>
              <ul className='list-none m-0  p-2 bg-gray-100 text-sm'>
                {!userData.isAccountVerified &&  <li
                onClick={sendVerificationOpt} className='py-1 px-2 hover:bg-gray-200 cursor-pointer'>Verify email</li>
                }
               
                <li onClick={logOut} className='py-1 px-2 hover:bg-gray-200 cursor-pointer pr-10'>Logout</li>
              </ul>
          </div>
        </div>
        :
        <button 
            onClick={()=>navigate('/login')} className='flex items-center gap-2 border        border-gray-500
            rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all'>Login <img src={assets.arrow_icon} alt="" />
        </button>
      }

     
    </div>
  )
}

export default Navbar