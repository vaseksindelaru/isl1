import { createSlice } from "@reduxjs/toolkit";
//axios
import axios from "axios";

export const usersSlice = createSlice(
    {
        name:"users",
        initialState:{
           list:[] 
        },
        reducers:{

        }
    }
)
export default usersSlice.reducer

//export const fetchAllUsers = () => () => {
 //  axios.get('https://reqres.in/api/users?page=1').then((response) => {}