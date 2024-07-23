import { useEffect } from "react"
import { addPopularMovies } from "../utils/movieSlice"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"

const usePopularMovies = ()=>{
     // Fetch data from TMDB Api and update store
  const dispatch = useDispatch()

  const getPopularMovies = async ()=>{
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
      const  data = await response.json()
      console.log(data)
      dispatch(addPopularMovies(data.results))

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getPopularMovies()
  },[])

}

export default usePopularMovies