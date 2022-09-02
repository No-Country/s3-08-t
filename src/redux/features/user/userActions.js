import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
//import {BASE_URL} from "@env";

const BASE_URL = "http://192.168.1.6:9000/api";


export const registerUser = createAsyncThunk(
    'user/register',
    async (userInfo) => {
      try{r
        console.log('Ingresando a RegisterUser')
        //const data = (await axios.post("http://192.168.56.1:9000/api/user/",userInfo)).data;
        //const data = (await axios.post("http://192.168.1.6:9000/api/user/",userInfo)).data;
        const data = (await axios.post(`${BASE_URL}/user`,userInfo)).data;
        console.log(data); 
        return data;
        
        }catch(e){
          if (e.response && e.response.data.message) {
            //console.log(e)
            return e.response.data.message

          } else {
            return e.message
          }
        }
    }
  )

  export const updateUser = createAsyncThunk(
    'user/register',
    async (userInfo) => {
      try{
        const data = await axios.put(BASE_URL + '/users',userInfo);
        console.log(data.data)
        }catch(e){
        console.error(e);
        }
    }
  )

  export const loginUser = createAsyncThunk(
    'user/login',
    async (userInfo) => {
      try{
        console.log('Ingresando a LoginUser')
        //const data = (await axios.post("http://192.168.1.6:9000/api/auth/login",userInfo)).data;
        const data = (await axios.post(BASE_URL +"/auth/login",userInfo)).data;
        
        console.log(data); 
        return data;
        
        }catch(e){
          if (e.response && e.response.data.message) {
            //console.log(e)
            return e.response.data.message

          } else {
            return e.message
          }
        }
    }
  )
    
    