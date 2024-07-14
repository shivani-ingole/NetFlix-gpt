import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate'
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword ,  updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

  const dispatch = useDispatch()

  const [isSignIn , setIsSignIn] = useState(true)
  const [errorMsg , setErrorMsg] = useState(null)

  const navigate = useNavigate()
  
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const handleButtonClick =()=>{
    // validate form data


const message =checkValidateData(email.current.value , password.current.value )
setErrorMsg(message)
if(message) return;

if(!isSignIn){
// sign up logic
createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
  .then((userCredential) => {
   
    const user = userCredential.user;
    updateProfile(user, {
      displayName:name.current.value , photoURL: "https://occ-0-3216-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABR0tVMTskvIJzW8TirWQnD3trSLTFrMfeVHJShxp5ZrGQNRNaUq2Z_7qykvuFfsTo_MvIcglg-HO4tfrnU7oc7VF0nnYK7w.png?r=b21"
    }).then(() => {
      // Profile updated!
      const {uid ,email, displayName , photoURL } = auth.currentUser;
      dispatch(addUser({uid:uid , email:email , displayName:displayName , photoURL:photoURL}))
      navigate("/browse")
    }).catch((error) => {
      // An error occurred
      setErrorMsg(error.message)
    });
    
    console.log(user)
   
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + "-" + errorMessage)
  });

}
else{
  // sign In
  signInWithEmailAndPassword(auth, email.current.value , password.current.value)
  .then((userCredential) => {
   
    const user = userCredential.user;

    console.log(user)
    navigate("/browse")
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + "-" + errorMessage)
  });


}

  }

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
    <form onSubmit={(e)=> e.preventDefault()} className='text-white p-4 bg-black bg-opacity-80 absolute -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2 flex flex-col w-[400px]'>
      <h1 className='font-bold text-2xl'> {isSignIn ? "Sign In" :"Sign up"}</h1>
      {
        !isSignIn && <input ref={name} type='text' placeholder='Full name' className='p-2 m-2  bg-gray-600'/>

      }
      <input ref={email} type='text' placeholder='Email Address' className='p-2 m-2 bg-gray-600'/>
     
      <input ref={password} type='password' placeholder='Password' className='p-2 m-2  bg-gray-600'/>
      <p className='text-red-600 text-xs font-bold'>{errorMsg}</p>
      <button className="p-4 m-3 bg-red-900 opacity-1" onClick={handleButtonClick}>{isSignIn ? "Sign In" :"Sign up"}</button>
      <p className='p-4 cursor-pointer' onClick={isSignInHandler}>
      {isSignIn ? "New to netflix? Sign up now" :"Already Registered, Sign In now"}
        </p>
    </form>
    </div>
  )
}

export default Login