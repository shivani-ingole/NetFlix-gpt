import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'


const GptSearchBar = () => {
  const langKey = useSelector((store)=> store.config.lang)
  return (
    <div className='pt-[8%] w-1/2 mx-auto'>
      <form className=' bg-black'>
      <input type='text' className='p-4 m-2 w-[80%]' placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className='py-2 px-4 text-white bg-red-800 rounded-lg'>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar