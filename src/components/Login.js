import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignIn , setIsSignIn] = useState(true)

   const isSignInHandler =()=>{
        setIsSignIn(!isSignIn)
   }
  return (
    <div  className='relative'>
      <Header />
      <div>
        <img className='' src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg"
        alt="logo" />
      </div>
    <form className='text-white p-4 bg-black bg-opacity-80 absolute -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2 flex flex-col w-[400px]'>
      <h1 className='font-bold text-2xl'> {isSignIn ? "Sign In" :"Sign up"}</h1>
      {
        !isSignIn && <input type='text' placeholder='Full name' className='p-2 m-2 text-black'/>

      }
      <input type='text' placeholder='Email Address' className='p-2 m-2 text-black'/>
     
      <input type='password' placeholder='Password' className='p-2 m-2 text-black'/>
      <button className="p-4 m-3 bg-red-900 opacity-1">{isSignIn ? "Sign In" :"Sign up"}</button>
      <p className='p-4 cursor-pointer' onClick={isSignInHandler}>
      {isSignIn ? "New to netflix? Sign up now" :"Already Registered, Sign In now"}
        </p>
    </form>
    </div>
  )
}

export default Login