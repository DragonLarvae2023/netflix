import {configureStore} from"@reduxjs/toolkit"
import movie from "./slices/movieSlice.js"
import user from "./slices/userSlices.js"
import trailerSlice from "./slices/trailerSlice.js"
import collectionSlice from "./slices/collectionSlice.js"
const appStore=configureStore({
reducer:{
  user,
  movie,
  trailer:trailerSlice,
  collection:collectionSlice

}
})
export default appStore