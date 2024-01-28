import {createSlice} from "@reduxjs/toolkit"
const userSlice=createSlice({
  name:"authorized_users",
  initialState:null,
  reducers:{
    addUser:(state,action)=>{
      return action.payload
    },
    removeUser:(state,action)=>null
  }
})
const {addUser,removeUser} =userSlice.actions
export {addUser,removeUser}
export default userSlice.reducer 