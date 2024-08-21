import React from 'react'
import Header from './Header'
import useNowPlayningMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from '../hooks/usePopularMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'


const Browse = () => {

  const showGptSearch = useSelector((store) => store.gpt.showSearchGpt)


  useNowPlayningMovies()
  usePopularMovies()
 
   return (
    <>
    <Header />
    {showGptSearch ? (
      <GptSearch />
    ) : (
      <>
        <MainContainer />
        <SecondaryContainer />
      </>
    )}
  </>


  )
}

export default Browse