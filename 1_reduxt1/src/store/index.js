import {configureStore} from '@reduxjs/toolkit'
//reducer
import users from './slices/users'
import { counterSlice } from './slices/counter'

export default configureStore({

  reducer:{
    users,
     counter: counterSlice.reducer
  }})