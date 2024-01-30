import {configureStore} from"@reduxjs/toolkit"
import movie from "./slices/movieSlice.js"
import user from "./slices/userSlices.js"
import trailerSlice from "./slices/trailerSlice.js"
import collectionSlice from "./slices/collectionSlice.js"
import gptToggle from "./slices/gptToggle.js"
const appStore=configureStore({
reducer:{
  user,
  movie,
  trailer:trailerSlice,
  collection:collectionSlice,
  gptToggle
}
})
export default appStore