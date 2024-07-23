import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title , movies}) => {
    console.log(movies)
  return (
    <div>
        <div className='overflow-x-hidden px-2'>
            <h1 className='text-white text-2xl my-4'>
              {title}
            </h1>
            <div className='flex overflow-x-scroll'>
            <div className='flex'>
                {movies?.map((item)=> <MovieCard key={item.id} posterPath={item.poster_path}/>)}
            </div>
            </div>
           
          
        </div>
    </div>
  )
}

export default MovieList