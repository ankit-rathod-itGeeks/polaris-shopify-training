import { createSlice } from '@reduxjs/toolkit'


export const profilePopUpSlice = createSlice({
    name: 'profilePopUp',
    initialState: {
      value: false,
      profileImage:''
    },
    reducers: {
      change: state => {
        
        state.value =!state.value
      },
      setProfileImage:(state,action)=>{
        state.profileImage=action.payload
      }
      
    }
  })
  

  export const { change,setProfileImage  } = profilePopUpSlice.actions

  export default profilePopUpSlice.reducer