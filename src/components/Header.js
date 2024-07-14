import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import {auth } from '../utils/firebase'
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate()
const user =useSelector(store => store.user)

  const handleSubmit =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
    
  }
  return (
   
    
    <div className='absolute w-full flex justify-between  py-2 bg-gradient-to-b from-black'>
      
      <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' />
     { user && <div className='flex p-2 items-center gap-1'>
    <img
    className='w-12 h-12'
    src ={user.photoURL}
    // src="https://occ-0-3216-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
     />
    <button onClick={handleSubmit} className='font-bold text-white'>(Sign out)</button>
  </div>}
    </div>

 
  
  )
}

export default Header