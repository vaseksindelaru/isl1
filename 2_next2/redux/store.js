import { configureStore } from "@reduxjs/toolkit";
import profiles from "./redusers/profiles";



export default configureStore  ( { 
    reducer:{
        profile: profiles
    }
  
})
