import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {title:"lola loca"}
export  const gameSlice = createSlice({

    name: 'game',
    initialState, 
    reducers: {
        selectGame:(state,action) => {
            state.title = action.payload
        }},
    extraReducers: {
        [HYDRATE]: (state, action) => { 
            state.name = action.payload.name;
       }} })

    export const { selectGame } = gameSlice.actions
        export default gameSlice.reducer