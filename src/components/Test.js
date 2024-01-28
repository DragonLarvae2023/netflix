import { options } from "../utils/constants";
function Test() {
  return (
    <>
      <div className="space-x-6">
        <button
          onClick={() => {
            fetch(
              "https://api.themoviedb.org/3/authentication/token/new",
              options
            )
              .then((response) => response.json())
              .then((response) => console.log(response))
              .catch((err) => console.error(err));
          }}
        >
          requrestID
        </button>
        <button>sessionId</button>
        <button
          onClick={() => {
            fetch("https://api.themoviedb.org/3/movie/changes?page=1", options)
              .then((response) => response.json())
              .then((response) => console.log(response))
              .catch((err) => console.error(err));
          }}
        >
          movieList
        </button>
        <button
          onClick={() => {
        fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          options
        )
          .then((response) => response.json())
          .then((response) => console.log(response))
          .catch((err) => console.error(err));
          }}
        >
          watchlist movies
        </button>
        <button
          onClick={() => {
            fetch(
              "https://api.themoviedb.org/3/collection/1236591?language=en-US",
              options
            )
              .then((response) => response.json())
              .then((response) => console.log(response))
              .catch((err) => console.error(err));
          }}
    
        >      Details</button>
        <button onClick={()=>{
          fetch(
            "https://api.themoviedb.org/3/movie/1236418?language=en-US",
            options
          )
            .then((response) => response.json())
            .then((response) => console.log(response))
            .catch((err) => console.error(err));
        }}>Movie</button>
        <button onClick={()=>{
          fetch("https://api.themoviedb.org/3/movie/1236418/images", options)
            .then((response) => response.json())
            .then((response) => console.log(response))
            .catch((err) => console.error(err));
        }}>Images</button>
      </div>

    </>
  );
}
export default Test;
