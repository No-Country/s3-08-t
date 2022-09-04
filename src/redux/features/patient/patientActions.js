import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
//import {BASE_URL} from "@env";

const BASE_URL = "http://192.168.1.6:9000/api";

export const registerPatient = createAsyncThunk(
    'patient/register',
    async (newPatient) => {
      try{
        console.log('Ingresando a RegisterPatient')
       
        const patient = (await axios.post(BASE_URL + '/patient', newPatient)).data;
        console.log(patient);
        //console.log(patient) 
        return patient;
        
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

  export const getPatients = createAsyncThunk(
    'patient/get',
    async () => {
      try{
        console.log('Ingresando a Get Patient')
       
        const patients = (await axios.get(BASE_URL + '/patient')).data;
        console.log(patients);
        //console.log(patient) 
        return patients;
        
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

