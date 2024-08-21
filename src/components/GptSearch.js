import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG} from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
         <div>
        <img 
         src={BG_IMG}
        alt="background_img"
        className="absolute -z-20" />
      </div>
     <GptSearchBar />
     <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch