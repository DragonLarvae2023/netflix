import { createSlice } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils"

const collectionSlice= createSlice({
name:"collections",
initialState:[],
reducers:{
  addToCollection(state,action){
    return action.payload
  }
}
})
export const {addToCollection} =collectionSlice.actions
export default collectionSlice.reducer