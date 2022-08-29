import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL} from "@env";



export const getDoctors = createAsyncThunk(
    'doctor/getDoctors',
    async () => {
      try{
        console.log('Ingresando a getDoctors')
       
        const doctors = (await axios.get(BASE_URL + '/doctor')).data;
        console.log(doctors);
        //console.log(patient) 
        return doctors;
        
        }catch(e){
          if (e.response && e.response.data.message) {
            //console.log(e)
            return e.response.data.message

          } else {
            return e.message
          }
        }
    }
  );

  export const getDoctorTypes = createAsyncThunk(
    'doctor/getDoctorTypes',
    async () => {
      try{
        console.log('Ingresando a getDoctorTypes')
       
        const doctorTypes = (await axios.get(BASE_URL + '/doctor/types')).data;
        console.log(doctorTypes);
        //console.log(patient) 
        return doctorTypes;
        
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