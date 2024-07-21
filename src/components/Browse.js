import React from 'react'
import Header from './Header'
import useNowPlayningMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"


const Browse = () => {

  useNowPlayningMovies()
 
   return (
    <>
    <Header />
    <MainContainer />
    <SecondaryContainer />  
    </>


  )
}

export default Browse