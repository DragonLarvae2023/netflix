import {createSlice} from "@reduxjs/toolkit"
const movieSlice=createSlice({
  name:"movie",
  initialState:{
    movies:[],
  },
  reducers:{
    addMovies(state,action){
      state.movies=action.payload.results
    }
    ,
    removeAllMovies(state,action){
      return {movies:[]}
    },
    addMovie(state,action){
      state.movies.push(action.payload)
    }
  }
})
export const {addMovie,addMovies,removeAllMovies} =movieSlice.actions
export default movieSlice.reducer