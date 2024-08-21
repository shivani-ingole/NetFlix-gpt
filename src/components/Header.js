import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import {auth } from '../utils/firebase'
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";

import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { toggleGptsearchView } from '../utils/gptSlice';
import { SUPPORTED_LAMGUAHES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const dispatch = useDispatch()  
  const navigate = useNavigate()
const user =useSelector(store => store.user)
const  showSearchGpt = useSelector((store)=> store.gpt.showSearchGpt)

  const handleSubmit =()=>{
    signOut(auth).then(() => {
      
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
    
  }

  useEffect(()=>{
    
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid ,email, displayName , photoURL } = user;
        dispatch(addUser({uid:uid , email:email , displayName:displayName , photoURL:photoURL}))
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });
    // Unsubscribe when component unmounts
    return () => unsubscribe()
    
      },[])

      const handleGptSearch=()=>{
        // toggle GPT search click
        dispatch(toggleGptsearchView())
      }

      const handleLanguageChange= (e)=>{
        dispatch(changeLanguage(e.target.value))
        //  console.log(e.target.value)
      }

  return (
   
    
    <div className='absolute w-full flex justify-between  py-2 bg-gradient-to-b from-black z-30'>
      
      <img className='w-44'
     src={LOGO}
     alt='netflix logo' />
     { user && <div className='flex p-2 items-center gap-1'>
      {  showSearchGpt && <select className='bg-gray-700 text-white p-2 mr-2 rounded-lg' onClick={handleLanguageChange}>
        {SUPPORTED_LAMGUAHES.map(lang =>  <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
       
      </select>}
      <button onClick={handleGptSearch} className='px-3 py-2 text-white bg-purple-700 rounded-lg mr-3 text-sm'>
        GPT search
      </button>
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