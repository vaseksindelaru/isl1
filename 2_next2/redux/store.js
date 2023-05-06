import { configureStore } from "@reduxjs/toolkit";
import profiles from "./redusers/profiles";
import jugador from "./redusers/managerGamers"
import titular from"./redusers/managerSelect"



export default configureStore  ( { 
    reducer:{
        profile: profiles,
        gamersSelect: jugador,
        titularSelect: titular
    }
  
})
