import {useEffect,useState} from "react"
import {useDispatch,useSelector} from "react-redux"
import {options} from "../utils/constants"
import {addMovies,addMovie,removeAllMovies} from "../slices/movieSlice"

function useGetMovieList(){
const movieList=  useSelector(store=>store.movie)
const dispatch=useDispatch()
useEffect(()=>{

!movieList.length&&fetch(
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => dispatch(addMovies(response)))
  .catch((err) => console.error(err));

})
}
export default useGetMovieList