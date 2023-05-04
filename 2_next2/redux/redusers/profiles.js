import { createSlice } from "@reduxjs/toolkit";
const initialState = [{
   id:"1",
   nombre: "holis",
  },
{
   id:"2",
   nombre: "holis 2",
    
  }]


const profileSlice = createSlice ({

  name: "profile",
  initialState,
  reducers: {

    addTask:(state,action)=>{
      console.log(state,action)
      state.push(action.payload)
    }
     /*SET_NAME(state, action){
       
        state.name = action.payload
        }*/}}) 

//export const {SET_NAME} =  profileSlice.actions
export const {addTask} = profileSlice.actions
export default profileSlice.reducer