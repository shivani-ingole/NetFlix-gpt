import { useEffect } from "react"
import { addNowPlayingMovies } from "../utils/movieSlice"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"

const useNowPlayingMovies = ()=>{
     // Fetch data from TMDB Api and update store
  const dispatch = useDispatch()

  const getNowPlayingMovies = async ()=>{
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
      const  data = await response.json()
      console.log(data.results)
      dispatch(addNowPlayingMovies(data.results))

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getNowPlayingMovies()
  },[])

}

export default useNowPlayingMovies