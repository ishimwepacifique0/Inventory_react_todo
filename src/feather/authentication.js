import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate } from "react-router-dom";

  const initialState = {
    IsLoggedin:false,
    data:[],
    token:''
 }

 export const Authslice = createSlice({
    name:"authentication",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.data = action.payload
            state.IsLoggedin = true
        },
        signup:(state,action)=>{
            state.data = action.payload
            state.IsLoggedin = true
        },
        storeToken:(state,action)=>{
            state.token = action.payload
        },
        logout:(state)=>{
            state.data = []
            state.IsLoggedin = false
        }

    }

})

export const { login,logout,signup }  = Authslice.actions
export default Authslice.reducer



export const LoginCredetial = (data) => async (dispatch) =>{
    try{
         const response = await axios.post('https://inventory-bay.onrender.com/api/auth/login',data)
         console.log(response.data)
         dispatch(login(response.data))
         localStorage.setItem("storeTokendata",JSON.stringify(response.data))
         window.location.href="/items"
    }catch(err){
        console.log(err)
    }
    
} 

export const SignupCredentail = (data) => async (dispatch)=>{
    try{
        const response = await axios.post('https://inventory-bay.onrender.com/api/auth/register',data)
        console.log(response.data)
        dispatch(signup(data))
        window.location.href = "/login"
    }catch(err){
        console.log(err)
    }
}

export const LogoutCredentail = (dispatch) =>{
       console.log('you\'re log out')
       localStorage.removeItem('storeTokendata')
       dispatch(logout())
       window.location.href = "/login"
 
}