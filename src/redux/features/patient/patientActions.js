import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL} from "@env";



export const registerPatient = createAsyncThunk(
    'patient/register',
    async (newPatient, {rejectWithValue}) => {
      try{
        console.log('Ingresando a RegisterPatient')
       
        const patient = (await axios.post(BASE_URL + '/patient', newPatient)).data;
        console.log(patient);
        //console.log(patient) 
        return patient;
        
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