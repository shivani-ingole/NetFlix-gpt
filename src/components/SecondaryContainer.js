import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  
  return(
    movies.nowPlayingMovies && (
      <div className='bg-black'>
        <div className='-mt-52 relative z-20'>
        <MovieList  title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
        <MovieList  title={"Popular Movies"} movies={movies.popularMovies}/>
        <MovieList  title={"Trending Movies"} movies={movies.nowPlayingMovies}/>
        <MovieList  title={"Horror Movies"} movies={movies.nowPlayingMovies}/>
        </div>
        
      </div>
    )
  )
  
}

export default SecondaryContainer