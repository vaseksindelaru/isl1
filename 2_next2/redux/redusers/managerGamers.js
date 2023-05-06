import { createSlice } from "@reduxjs/toolkit";

const initialState =[{
    id:1,
    name:"Pepito",
    foto:"https://cdn.pixabay.com/photo/2018/08/18/21/28/leon-3615514__340.jpg" 
  },{
    id:2,
    name:"Carlitos",
    foto:"https://images.unsplash.com/photo-1610186356191-880ceaa884f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amlyYWZhfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
  }]
  /* {
    jugadores: [{
        id:1,
        name:"Pepito",
        foto:"https://cdn.pixabay.com/photo/2018/08/18/21/28/leon-3615514__340.jpg" 
}],
    equipoSelect: []
}*/

const jugadorSelectSlice = createSlice ({

  name: "gamersSelect",
  initialState,
  reducers: {

    selectTask1:(state,action)=>{
     /*console.log(state,action)
     state.push(action.payload)
    }
     SET_NAME(state, action){
       
        state.name = action.payload
         */}}})

//export const {SET_NAME} =  profileSlice.actions
export const {selectTask1} = jugadorSelectSlice.actions
export default jugadorSelectSlice.reducer