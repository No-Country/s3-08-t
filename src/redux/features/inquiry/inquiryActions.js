import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
//import {BASE_URL} from "@env";

const BASE_URL = "http://192.168.1.6:9000/api";

export const registerInquiry = createAsyncThunk(
    'inquiry/register',
    async (newInquiry) => {
      try{
        console.log('Ingresando a RegisterInquiry')
       
        const inquiry = (await axios.post(BASE_URL + '/inquiry', newInquiry)).data;
        console.log(inquiry);
        //console.log(patient) 
        return inquiry;
        
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

  export const updatePatient = createAsyncThunk(
    'patient/update',
    async (userInfo) => {
      try{
        const data = await axios.put(BASE_URL + '/patient',userInfo);
        console.log(data.data)
        }catch(e){
        console.error(e);
        }
    }
  )