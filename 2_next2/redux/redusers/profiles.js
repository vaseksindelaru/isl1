import { createSlice } from "@reduxjs/toolkit";
const initialState = [

{

    id:"1",
    nombre: "holis",

},
{

    id:"2",
    nombre: "holis 2",
    


}

]


const profileSlice = createSlice ({

  name: "profile",
  initialState,
  reducers: {
     /*SET_NAME(state, action){
       
        state.name = action.payload
        

     }*/


  }



}) 


//export const {SET_NAME} =  profileSlice.actions
export default profileSlice.reducer