import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import profiles from "./redusers/profiles";
import jugador from "./redusers/managerGamers"
import titular from"./redusers/managerSelect"
import gameSlice from "./redusers/gameSlice"
import { createWrapper} from "next-redux-wrapper";
import { Action } from "redux";


const makeStore = () => configureStore  ( { 
    reducer:{
        profile: profiles,
        gamersSelect: jugador,
        titularSelect: titular,
        game: gameSlice
    }})
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk <ReturnType = void>=ThunkAction<ReturnType ,AppState,unknown, Action>;


   export const wrapper = createWrapper<AppStore>(makeStore)
