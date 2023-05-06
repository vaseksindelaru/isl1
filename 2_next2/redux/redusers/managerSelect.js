import { createSlice } from "@reduxjs/toolkit";
const initialState = []

const managerSelectSlice = createSlice ({

  name: "managerSelect",
  initialState,
  reducers: {

    selectTask:(state,action)=>{
     //console.log(state,action)
     state.push(action.payload)
    }
     /*SET_NAME(state, action){
       
        state.name = action.payload
         */}})

//export const {SET_NAME} =  profileSlice.actions
export const {selectTask} = managerSelectSlice.actions
export default managerSelectSlice.reducer 