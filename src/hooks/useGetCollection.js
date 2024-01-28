import { async } from "@firebase/util";
import { useEffect } from "react";
import {useDispatch} from "react-redux"
import {addToCollection} from "../slices/collectionSlice"
import {options} from "../utils/constants"
async function gettingEverything(){

//Now Playing
const now_playing=await fetch(
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  options
)
  .then((response) => response.json())

//Popular
const popular = await fetch(
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  options
).then((response) => response.json());

  //Top Rated
  const top_rated = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  ).then((response) => response.json());

    //Upcoming
    const upcoming = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    ).then((response) => response.json());

const collections = [
  { title: "Now Playing", results: now_playing.results, id: 1 },
  { title: "Popular", results: popular.results, id: 2 },
  { title: "Top Rated", results: top_rated.results, id: 3 },
  { title: "Upcoming", results: upcoming.results, id: 4 },
];
return collections;
}
function useGetCollection(){
  const dispatch = useDispatch();
  useEffect(()=>{
    (async()=>{
      const collections=await gettingEverything()
      dispatch(addToCollection(collections))
    })()
  },[])
  
}
export default useGetCollection