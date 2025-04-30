import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets.js'
import { toast } from 'react-toastify'
import { AppContext } from '../context/AppContext.jsx'
import axios from 'axios'

const EmailVerify = () => {
  axios.defaults.withCredentials = true
  const inputRefs = React.useRef([])
  const navigate = useNavigate()
  const {backendUrl, isLogin, userData, getUserData}  = useContext(AppContext)


  const handelInput = (e, index)=>{
    if(e.target.value.length > 0 && index < inputRefs.current.length - 1){
      inputRefs.current[index + 1].focus()
    }
  }

  const handelKeyDown = (e, index)=>{
    if(e.key === 'Backspace' && e.target.value === '' && index > 0){
      inputRefs.current[index - 1].focus()
    }
  } 

  const handlePaste = (e)=>{
    const paste = e.clipboardData.getData('text')
    const pasteArray = paste.split('')
    pasteArray.forEach((char, index)=>{
      if(inputRefs.current[index]){
        inputRefs.current[index].value = char
      }
    })
  }

  const onSubmitHandler = async(e)=>{
    try {
      e.preventDefault()
      const otpArray = inputRefs.current.map(e => e.value)
      const otp = otpArray.join('')

      const {data} = await axios.post(backendUrl + '/api/auth/verify-account', {otp})
      if(data.success){
        toast.success(data.message)
        getUserData()
        navigate('/')
      }else{
        toast.error(data.message)
      }
    }catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    isLogin && userData && userData.isAccountVerified && navigate('/')
  }, [isLogin, userData])



  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 to-indigo-700'>
      
       {/* <img onClick={()=>navigate('/')} src={assets.logo} className='absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer'/> */}


       <form onSubmit={onSubmitHandler}
          className='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm'>
          <h1 className='text-white text-2xl font-semibold text-center mb-4'>Email Verify OTP</h1>
          <p className='text-center mb-6 text-indigo-300'>Enter the 6-digit code send to your email id.</p>
          <div className='flex justify-between mb-8 ' onPaste={handlePaste}>
            {Array(6).fill(0).map((_, index)=>(
              <input ref={e => inputRefs.current[index] = e} key={index} type="text"  maxLength='1'
              onInput={(e)=> handelInput(e, index)}
              onKeyDown={(e)=> handelKeyDown(e, index)}
              required
              className='w-12 h-12 bg-[#333A5C] text-white text-center text-lg rounded-md'/>
            ))}
          </div>
          <button className='w-full py-3  bg-gradient-to-r from-indigo-500 to-indigo-900 text-white rounded-full'>Verify email</button>
       </form>
    </div>
  )
}

export default EmailVerify