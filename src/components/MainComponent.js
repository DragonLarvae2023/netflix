import { useDispatch, UseDispatch } from "react-redux"
import { useSelector } from "react-redux"
import {addTrailer} from "../slices/trailerSlice"
import {options} from "../utils/constants"
function MainComponent(){
  const dispatch=useDispatch()
const movies=useSelector(state=>state.movie.movies)
if(!movies.length)
return
const showcase= movies[1]
const {id,title,overview,release_date} =showcase
fetch(
  `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
  options
)
  .then((response) => response.json())
  .then((response) => dispatch(addTrailer(response.results)))
  .catch((err) => console.error(err));
  return (
    <>
      <div className="relative w-full h-full ">
        <VideoDescrition descriptions={{ title, overview, release_date }} />
        <VideoBg />
        <div className="absolute inset-0 bg-gradient-to-t z-10 from-zinc-950"></div>
      </div>
    </>
  );
}
function VideoBg(){
  const videos=useSelector(state=>state.trailer)
  if(!videos)
  return
  let trailer=videos.filter((video)=>video.type=="Trailer") 
  trailer=trailer.length?trailer[0]:videos[0]
  const key=trailer.key

return (
  <div className="absolute inset-0 z-0 ">
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${key}?vq=hd1080&autoplay=1&loop=1&modestbranding=1&rel=0&iv_load_policy=3&fs=0&color=white&controls=0&disablekb=1&playlist=${key}`}
      width="100%"
      height="100%"
      title="A YouTube video"
      frameborder="0"
      autoPlay
    ></iframe>
  </div>
);
}
function VideoDescrition({descriptions}){

  return (
    <>
      <div
        className="bg-transparent text-white p-6 rounded-lg absolute  z-20 "
        style={{ inset: "45% 0% " }}
      >
        <h1 className="text-2xl font-extrabold mb-2">{descriptions.title}</h1>
        <p className="text-m font-semibold mb-4">{descriptions.overview}</p>
     
        <div className="flex space-x-4">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-sm shadow-lg">
            Play
          </button>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-sm shadow-lg">
            More Info
          </button>
        </div>
      </div>
    </>
  );
}
export default MainComponent