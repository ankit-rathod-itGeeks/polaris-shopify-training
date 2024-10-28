import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Features/Counter/counterSlice'
import profilePopUpReducer from './Features/ProfiePopUp/profilePopUpSlice'
 

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    profilePopUp:profilePopUpReducer
  },
 
})