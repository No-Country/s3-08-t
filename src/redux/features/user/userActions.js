import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



const BASE_URL = process.env.BASE_URL;


export const registerUser = createAsyncThunk(
    'user/register',
    async (userInfo, {rejectWithValue}) => {
      try{
        console.log('Ingresando a RegisterUser')
        //const data = (await axios.post("http://192.168.1.3:9000/api/user/",userInfo)).data;
        const data = (await axios.post("http://192.168.1.6:9000/api/user/",userInfo)).data;
        console.log(data); 
        return data;
        
        }catch(e){
          if (e.response && e.response.data.message) {
            //console.log(e)
            return rejectWithValue(e.response.data.message)

          } else {
            return rejectWithValue(e.message)
          }
        }
    }
  )

  export const updateUser = createAsyncThunk(
    'user/register',
    async (userInfo) => {
      try{
        const data = await axios.post('http://192.168.1.6:4000/api/users',userInfo);
        console.log(data.data)
        }catch(e){
        console.error(e);
        }
    }
  )

  export const loginUser = createAsyncThunk(
    'user/login',
    async (userInfo, {rejectWithValue}) => {
      try{
        console.log('Ingresando a LoginUser')
        const data = (await axios.post("http://192.168.1.6:9000/api/auth/login",userInfo)).data;
        //const data = (await axios.post("http://192.168.1.3:9000/api/auth/login",userInfo)).data;
        
        console.log(data); 
        return data;
        
        }catch(e){
          if (e.response && e.response.data.message) {
            //console.log(e)
            return rejectWithValue(e.response.data.message)

          } else {
            return rejectWithValue(e.message)
          }
        }
    }
  )
    
    