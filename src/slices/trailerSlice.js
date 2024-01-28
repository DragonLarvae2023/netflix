import {createSlice} from "@reduxjs/toolkit"
const videos=createSlice({
  name:"videos",
  initialState:null,
  reducers:{
    addTrailer:(state,action)=>{
      return action.payload
    }
  }
})
export const {addTrailer} =videos.actions
export default videos.reducer;